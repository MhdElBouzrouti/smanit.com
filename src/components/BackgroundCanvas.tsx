import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  flash: number;
  connections: number[];
}

interface Signal {
  fromNode: number;
  toNode: number;
  progress: number; // 0 to 1
  speed: number;
  color: string;
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
    };

    window.addEventListener('resize', handleResize);

    // 1. Deep Space Multi-Layer Ambient Stars
    const starCount = Math.min(Math.floor((width * height) / 7000), 160);
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      alpha: number;
      twinkleSpeed: number;
    }> = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    // 2. Neural Nodes
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 55);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.3,
        alpha: 0.5,
        flash: 0,
        connections: [],
      });
    }

    // 3. Signals travelling between neural nodes
    const signals: Signal[] = [];
    const maxSignals = 30;

    const signalColors = ['#38bdf8', '#818cf8', '#67e8f9', '#a855f7'];

    const spawnSignal = (fromIdx: number, toIdx: number) => {
      if (signals.length >= maxSignals) return;
      signals.push({
        fromNode: fromIdx,
        toNode: toIdx,
        progress: 0,
        speed: Math.random() * 0.015 + 0.008,
        color: signalColors[Math.floor(Math.random() * signalColors.length)],
      });
    };

    // 4. Mouse interaction
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;
    let signalSpawnTimer = 0;

    const maxDistance = 160;

    const render = () => {
      time += 0.006;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Deep Space Base
      ctx.fillStyle = '#04060a';
      ctx.fillRect(0, 0, width, height);

      // Cosmic Galaxy Nebulae
      const neb1 = ctx.createRadialGradient(
        width * 0.45 + Math.sin(time * 0.5) * 40,
        height * 0.45 + Math.cos(time * 0.4) * 30,
        10,
        width * 0.45,
        height * 0.45,
        Math.max(width * 0.5, 450)
      );
      neb1.addColorStop(0, 'rgba(14, 165, 233, 0.12)');
      neb1.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
      neb1.addColorStop(0.8, 'rgba(30, 58, 138, 0.02)');
      neb1.addColorStop(1, 'transparent');
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, width, height);

      const neb2 = ctx.createRadialGradient(
        width * 0.55 + Math.cos(time * 0.3) * 50,
        height * 0.52 + Math.sin(time * 0.3) * 40,
        20,
        width * 0.55,
        height * 0.52,
        Math.max(width * 0.4, 350)
      );
      neb2.addColorStop(0, 'rgba(124, 58, 237, 0.08)');
      neb2.addColorStop(0.5, 'rgba(79, 70, 229, 0.03)');
      neb2.addColorStop(1, 'transparent');
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, width, height);

      // Stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.alpha += s.twinkleSpeed;
        if (s.alpha > 0.85 || s.alpha < 0.15) s.twinkleSpeed = -s.twinkleSpeed;

        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = Math.max(0.1, s.alpha);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Update Node positions & Reset connection lists
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        if (n.flash > 0) {
          n.flash -= 0.03;
        }

        n.connections = [];
      }

      // Compute connections & draw neural mesh lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            n1.connections.push(j);
            n2.connections.push(i);

            const lineAlpha = (1 - dist / maxDistance) * 0.18;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Automatically spawn signals along active neural connections
      signalSpawnTimer++;
      if (signalSpawnTimer % 18 === 0) {
        const randomNodeIdx = Math.floor(Math.random() * nodes.length);
        const randomNode = nodes[randomNodeIdx];
        if (randomNode && randomNode.connections.length > 0) {
          const targetNodeIdx = randomNode.connections[Math.floor(Math.random() * randomNode.connections.length)];
          spawnSignal(randomNodeIdx, targetNodeIdx);
        }
      }

      // Update and draw traveling signals (luminescent data packets)
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i];
        sig.progress += sig.speed;

        const from = nodes[sig.fromNode];
        const to = nodes[sig.toNode];

        if (!from || !to || sig.progress >= 1) {
          if (to) {
            to.flash = 1; // Flash receiving node upon arrival
            // Synaptic propagation: chance to trigger a forward signal
            if (Math.random() > 0.5 && to.connections.length > 0) {
              const nextTarget = to.connections[Math.floor(Math.random() * to.connections.length)];
              if (nextTarget !== sig.fromNode) {
                spawnSignal(sig.toNode, nextTarget);
              }
            }
          }
          signals.splice(i, 1);
          continue;
        }

        // Current position of signal packet
        const currX = from.x + (to.x - from.x) * sig.progress;
        const currY = from.y + (to.y - from.y) * sig.progress;

        // Tail behind signal packet
        const tailProgress = Math.max(0, sig.progress - 0.18);
        const tailX = from.x + (to.x - from.x) * tailProgress;
        const tailY = from.y + (to.y - from.y) * tailProgress;

        // Gradient beam for signal pulse
        const grad = ctx.createLinearGradient(tailX, tailY, currX, currY);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        grad.addColorStop(1, sig.color);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(currX, currY);
        ctx.stroke();

        // Glowing pulse head
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = sig.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(currX, currY, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Neural Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const currentAlpha = Math.min(1, n.baseAlpha + n.flash * 0.7);

        // Outer glow on flash
        if (n.flash > 0.1) {
          ctx.fillStyle = `rgba(56, 189, 248, ${n.flash * 0.5})`;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * (1 + n.flash * 2.5), 0, Math.PI * 2);
          ctx.fill();
        }

        // Node core
        ctx.fillStyle = n.flash > 0.2 ? '#ffffff' : `rgba(186, 230, 253, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
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
