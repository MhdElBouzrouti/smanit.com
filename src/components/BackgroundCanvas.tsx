import React, { useEffect, useRef } from 'react';

interface StreamLine {
  y: number;
  speed: number;
  length: number;
  alpha: number;
  width: number;
  isAmber: boolean;
}

interface Checkpoint {
  x: number;
  y: number;
  pulsePhase: number;
  radius: number;
}

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initFlows();
    };

    window.addEventListener('resize', handleResize);

    const streamCount = 18;
    let streams: StreamLine[] = [];

    // Subtle checkpoints without descriptive text
    const checkpoints: Checkpoint[] = [
      { x: 0.22, y: 0.35, pulsePhase: 0, radius: 2.5 },
      { x: 0.5, y: 0.22, pulsePhase: 1.5, radius: 3 },
      { x: 0.78, y: 0.4, pulsePhase: 3.1, radius: 2.5 },
      { x: 0.35, y: 0.72, pulsePhase: 4.2, radius: 3 },
      { x: 0.68, y: 0.76, pulsePhase: 2.3, radius: 2.5 },
    ];

    const initFlows = () => {
      streams = [];
      for (let i = 0; i < streamCount; i++) {
        streams.push({
          y: Math.random() * height,
          speed: Math.random() * 0.6 + 0.25,
          length: Math.random() * 240 + 100,
          alpha: Math.random() * 0.14 + 0.04,
          width: Math.random() * 1.2 + 0.6,
          isAmber: Math.random() < 0.2,
        });
      }
    };

    initFlows();

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let tick = 0;
    const streamPositions = new Float32Array(streamCount);
    for (let i = 0; i < streamCount; i++) {
      streamPositions[i] = Math.random() * width;
    }

    const render = () => {
      tick += 0.012;
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // Deep obsidian
      ctx.fillStyle = '#06070a';
      ctx.fillRect(0, 0, width, height);

      // Subtle warm ambient glow
      const centerX = width / 2;
      const centerY = height / 2;

      const amberAura = ctx.createRadialGradient(
        centerX + (mouseX - centerX) * 0.06,
        centerY + (mouseY - centerY) * 0.06,
        0,
        centerX,
        centerY,
        Math.max(width * 0.32, 280)
      );
      amberAura.addColorStop(0, 'rgba(245, 158, 11, 0.045)');
      amberAura.addColorStop(0.4, 'rgba(217, 119, 6, 0.018)');
      amberAura.addColorStop(0.8, 'rgba(15, 23, 42, 0.01)');
      amberAura.addColorStop(1, 'transparent');
      ctx.fillStyle = amberAura;
      ctx.fillRect(0, 0, width, height);

      // Precision architectural grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;

      const gridStep = 80;
      const startX = Math.floor((mouseX * 0.02) % gridStep);
      const startY = Math.floor((mouseY * 0.02) % gridStep);

      ctx.beginPath();
      for (let x = startX; x < width; x += gridStep) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = startY; y < height; y += gridStep) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Abstract dotted trajectory lines
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.setLineDash([4, 10]);
      ctx.lineWidth = 1;
      ctx.beginPath();

      const cpCoords = checkpoints.map((cp) => ({
        x: cp.x * width + Math.sin(tick + cp.pulsePhase) * 5,
        y: cp.y * height + Math.cos(tick + cp.pulsePhase) * 5,
      }));

      if (cpCoords.length >= 5) {
        ctx.moveTo(cpCoords[0].x, cpCoords[0].y);
        ctx.lineTo(cpCoords[1].x, cpCoords[1].y);
        ctx.lineTo(cpCoords[2].x, cpCoords[2].y);
        ctx.moveTo(cpCoords[0].x, cpCoords[0].y);
        ctx.lineTo(cpCoords[3].x, cpCoords[3].y);
        ctx.lineTo(cpCoords[4].x, cpCoords[4].y);
        ctx.lineTo(cpCoords[2].x, cpCoords[2].y);
      }
      ctx.stroke();
      ctx.restore();

      // Silent horizontal light streams
      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        streamPositions[i] += stream.speed;
        if (streamPositions[i] > width + stream.length) {
          streamPositions[i] = -stream.length;
          stream.y = Math.random() * height;
        }

        const headX = streamPositions[i];
        const tailX = headX - stream.length;

        const grad = ctx.createLinearGradient(tailX, stream.y, headX, stream.y);
        if (stream.isAmber) {
          grad.addColorStop(0, 'rgba(245, 158, 11, 0)');
          grad.addColorStop(0.7, `rgba(245, 158, 11, ${stream.alpha * 0.7})`);
          grad.addColorStop(1, `rgba(251, 191, 36, ${stream.alpha * 1.3})`);
        } else {
          grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
          grad.addColorStop(0.8, `rgba(226, 232, 240, ${stream.alpha * 0.5})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${stream.alpha})`);
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = stream.width;
        ctx.beginPath();
        ctx.moveTo(tailX, stream.y);
        ctx.lineTo(headX, stream.y);
        ctx.stroke();

        if (stream.isAmber) {
          ctx.fillStyle = 'rgba(251, 191, 36, 0.6)';
          ctx.beginPath();
          ctx.arc(headX, stream.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Discreet amber checkpoints (no labels)
      for (let i = 0; i < checkpoints.length; i++) {
        const cp = checkpoints[i];
        const pos = cpCoords[i];
        const pulse = (Math.sin(tick * 1.5 + cp.pulsePhase) + 1) / 2;

        ctx.strokeStyle = `rgba(245, 158, 11, ${0.1 + pulse * 0.2})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, cp.radius * 2.5 + pulse * 3, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = `rgba(251, 191, 36, ${0.6 + pulse * 0.3})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, cp.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
