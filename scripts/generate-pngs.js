import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const BRAND_DIR = path.resolve('public/brand');

async function generate() {
  console.log('Generating PNG brand assets for YouTube and Social Media...');

  // 1. YouTube & Social Avatar (1080x1080 and 800x800)
  const avatarSvg = fs.readFileSync(path.join(BRAND_DIR, 'smanit-avatar-social.svg'));
  await sharp(avatarSvg)
    .resize(1080, 1080)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-avatar-social.png'));
  
  await sharp(avatarSvg)
    .resize(800, 800)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-youtube-profile.png'));
  console.log('✓ smanit-youtube-profile.png (800x800)');

  // 1b. LinkedIn Company Logo (400x400)
  await sharp(avatarSvg)
    .resize(400, 400)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-linkedin-logo.png'));
  console.log('✓ smanit-linkedin-logo.png (400x400)');

  // 2. YouTube Banner Image (2048x1152 - exact YouTube spec)
  const ytBannerSvg = fs.readFileSync(path.join(BRAND_DIR, 'smanit-youtube-banner.svg'));
  await sharp(ytBannerSvg)
    .resize(2048, 1152)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-youtube-banner.png'));
  console.log('✓ smanit-youtube-banner.png (2048x1152)');

  // 2b. YouTube Video Watermark (150x150)
  const logoDarkSvg = fs.readFileSync(path.join(BRAND_DIR, 'smanit-logo-dark.svg'));
  await sharp(logoDarkSvg)
    .resize(600, 175)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-youtube-watermark.png'));
  console.log('✓ smanit-youtube-watermark.png (600x175)');

  // 3. LinkedIn Banner (1584x396)
  const bannerSvg = fs.readFileSync(path.join(BRAND_DIR, 'smanit-banner-social.svg'));
  await sharp(bannerSvg)
    .resize(1584, 396)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-banner-linkedin.png'));
  console.log('✓ smanit-banner-linkedin.png (1584x396)');

  // 4. Twitter / X Banner (1500x500)
  await sharp(bannerSvg)
    .resize(1500, 500)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-banner-twitter.png'));
  console.log('✓ smanit-banner-twitter.png (1500x500)');

  // 5. Logo Dark & Light (2400x700)
  await sharp(logoDarkSvg)
    .resize(2400, 700)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-logo-dark.png'));

  const logoLightSvg = fs.readFileSync(path.join(BRAND_DIR, 'smanit-logo-light.svg'));
  await sharp(logoLightSvg)
    .resize(2400, 700)
    .png({ quality: 100 })
    .toFile(path.join(BRAND_DIR, 'smanit-logo-light.png'));

  console.log('All YouTube & brand assets generated successfully!');
}

generate().catch(err => {
  console.error('Generation failed:', err);
  process.exit(1);
});
