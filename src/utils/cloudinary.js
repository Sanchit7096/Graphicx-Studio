/**
 * Utility to optimize Cloudinary image and video URLs on the fly.
 * Automatically injects f_auto, q_auto, width limits, and DPR handling.
 */

/**
 * Transforms a raw Cloudinary image URL with optimization parameters.
 * @param {string} url - Original Cloudinary URL
 * @param {Object} options - Transformation options
 * @param {number} [options.width] - Target width in pixels
 * @param {number} [options.height] - Target height in pixels
 * @param {string} [options.quality='auto'] - Image quality (default: auto)
 * @param {string} [options.format='auto'] - Output format (default: auto)
 * @param {string} [options.crop='limit'] - Crop mode (default: limit)
 * @returns {string} Optimized Cloudinary URL
 */
export function optimizeCloudinaryUrl(url, options = {}) {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com')) {
    return url;
  }

  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'limit',
    dpr,
  } = options;

  // Build transformation parts
  const transforms = [`f_${format}`, `q_${quality}`];

  if (width) {
    transforms.push(`w_${width}`);
    if (crop) transforms.push(`c_${crop}`);
  }
  if (height) {
    transforms.push(`h_${height}`);
  }
  if (dpr) {
    transforms.push(`dpr_${dpr}`);
  }

  const transformString = transforms.join(',');

  // Check if image or video upload
  const uploadIndex = url.indexOf('/upload/');
  if (uploadIndex === -1) return url;

  const prefix = url.substring(0, uploadIndex + 8);
  const suffix = url.substring(uploadIndex + 8);

  // If URL already has transformations directly after /upload/ (e.g., /upload/v1234/ vs /upload/f_auto/.../v1234/)
  // Check if suffix starts with a version tag v\d+ or existing transformations
  if (/^v\d+\//.test(suffix)) {
    return `${prefix}${transformString}/${suffix}`;
  } else if (!suffix.startsWith('f_') && !suffix.startsWith('w_') && !suffix.startsWith('q_')) {
    return `${prefix}${transformString}/${suffix}`;
  }

  return url;
}

/**
 * Generates a responsive srcSet string for a Cloudinary image URL.
 * @param {string} url - Cloudinary URL
 * @param {number[]} widths - Array of widths in pixels
 * @returns {string} srcSet string
 */
export function getCloudinarySrcSet(url, widths = [320, 640, 960, 1280]) {
  if (!url || typeof url !== 'string' || !url.includes('res.cloudinary.com')) {
    return '';
  }

  return widths
    .map((w) => `${optimizeCloudinaryUrl(url, { width: w })} ${w}w`)
    .join(', ');
}

/**
 * Generates a poster image URL from a Cloudinary video URL.
 * @param {string} videoUrl - Cloudinary video URL
 * @param {number} [width=800] - Poster width
 * @returns {string} Poster image URL
 */
export function getCloudinaryVideoPoster(videoUrl, width = 800) {
  if (!videoUrl || typeof videoUrl !== 'string' || !videoUrl.includes('res.cloudinary.com')) {
    return '';
  }

  // Replace /video/upload/ with /video/upload/so_0,f_auto,q_auto,w_${width}/ and extension with .jpg
  return videoUrl
    .replace('/video/upload/', `/video/upload/so_0,f_auto,q_auto,w_${width}/`)
    .replace(/\.[^/.]+$/, '.jpg');
}

/**
 * Optimizes a Cloudinary video URL for delivery.
 * @param {string} videoUrl - Cloudinary video URL
 * @param {number} [width=1080] - Video max width
 * @returns {string} Optimized video URL
 */
export function optimizeCloudinaryVideo(videoUrl, width = 1080) {
  if (!videoUrl || typeof videoUrl !== 'string' || !videoUrl.includes('res.cloudinary.com')) {
    return videoUrl;
  }

  const uploadIndex = videoUrl.indexOf('/video/upload/');
  if (uploadIndex === -1) return videoUrl;

  const prefix = videoUrl.substring(0, uploadIndex + 14);
  const suffix = videoUrl.substring(uploadIndex + 14);

  if (/^v\d+\//.test(suffix)) {
    return `${prefix}q_auto,vc_auto,w_${width},c_limit/${suffix}`;
  }

  return videoUrl;
}
