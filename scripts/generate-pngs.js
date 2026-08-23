import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const BRAND_DIR = path.resolve('public/brand');

async function generate() {
  console.log('Generating PNG brand assets for LinkedIn and Social Media...');

  // 1. Smanit Avatar / LinkedIn Profile Picture (1080x1080)
  const avatarSvg = fs.readFileSync(path.join(BRAND_DIR, 'smanit-avatar-social.svg'));
  await sharp(avatarSvg)
    .resize(1080, 1080)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-avatar-social.png'));
  console.log('✓ smanit-avatar-social.png (1080x1080)');

  // 1b. Smanit LinkedIn Company Logo (400x400 - standard LinkedIn format)
  await sharp(avatarSvg)
    .resize(400, 400)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-linkedin-logo.png'));
  console.log('✓ smanit-linkedin-logo.png (400x400)');

  // 2. Smanit Banner for LinkedIn (1584x396)
  const bannerSvg = fs.readFileSync(path.join(BRAND_DIR, 'smanit-banner-social.svg'));
  await sharp(bannerSvg)
    .resize(1584, 396)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-banner-linkedin.png'));
  console.log('✓ smanit-banner-linkedin.png (1584x396)');

  // 3. Smanit Banner for Twitter / X (1500x500)
  await sharp(bannerSvg)
    .resize(1500, 500)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-banner-twitter.png'));
  console.log('✓ smanit-banner-twitter.png (1500x500)');

  // 4. Logo Dark (Transparent High-Res 2400x700)
  const logoDarkSvg = fs.readFileSync(path.join(BRAND_DIR, 'smanit-logo-dark.svg'));
  await sharp(logoDarkSvg)
    .resize(2400, 700)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-logo-dark.png'));
  console.log('✓ smanit-logo-dark.png (2400x700)');

  // 5. Logo Light (Transparent High-Res 2400x700)
  const logoLightSvg = fs.readFileSync(path.join(BRAND_DIR, 'smanit-logo-light.svg'));
  await sharp(logoLightSvg)
    .resize(2400, 700)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-logo-light.png'));
  console.log('✓ smanit-logo-light.png (2400x700)');

  console.log('All PNG assets generated successfully in public/brand/ !');
}

generate().catch(err => {
  console.error('Generation failed:', err);
  process.exit(1);
});
