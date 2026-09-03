import React from 'react';
import { optimizeCloudinaryUrl, getCloudinarySrcSet } from '../../utils/cloudinary';

/**
 * Reusable image component with automatic Cloudinary optimization,
 * responsive srcSet, native lazy loading, and CLS prevention.
 */
const CloudinaryImage = ({
  src,
  alt = '',
  width,
  height,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  widths = [320, 640, 960, 1280],
  sizes,
  style,
  draggable = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  if (!src) return null;

  const isCloudinary = typeof src === 'string' && src.includes('res.cloudinary.com');
  const optimizedSrc = isCloudinary
    ? optimizeCloudinaryUrl(src, { width: width || 800 })
    : src;
  const srcSet = isCloudinary && sizes ? getCloudinarySrcSet(src, widths) : undefined;

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={fetchPriority === 'high' ? 'eager' : loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={className}
      style={style}
      draggable={draggable}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    />
  );
};

export default React.memo(CloudinaryImage);
