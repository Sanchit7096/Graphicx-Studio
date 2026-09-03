import React, { useState, useRef, useEffect } from 'react';
import { optimizeCloudinaryVideo, getCloudinaryVideoPoster } from '../../utils/cloudinary';

const rawVideo1 = "https://res.cloudinary.com/fj3hcwbi/video/upload/v1786515602/f11nywlt1am5l8xcg5c7.mp4";
const rawVideo2 = "https://res.cloudinary.com/fj3hcwbi/video/upload/v1786515607/si0pyichbdgbpaddzqk7.mp4";

const videos = [
  {
    src: optimizeCloudinaryVideo(rawVideo1, 1080),
    poster: getCloudinaryVideoPoster(rawVideo1, 960),
  },
  {
    src: optimizeCloudinaryVideo(rawVideo2, 1080),
    poster: getCloudinaryVideoPoster(rawVideo2, 960),
  },
];

const BgVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    // Switch video after 19 seconds
    const timer = setTimeout(() => {
      handleVideoEnd();
    }, 19000);

    return () => clearTimeout(timer);
  }, [currentVideo]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by low power mode/browser policies
      });
    }
  }, [currentVideo]);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden" aria-hidden="true">
      {/* Background Video Implementation */}
      <video
        ref={videoRef}
        key={currentVideo}
        muted
        autoPlay
        playsInline
        preload="metadata"
        poster={videos[currentVideo].poster}
        disablePictureInPicture
        onEnded={handleVideoEnd}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000"
      >
        <source src={videos[currentVideo].src} type="video/mp4" />
      </video>

      {/* Layer 1: Mid-Tone Cinematic Overlay (Glassmorphic) */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-[1]"></div>

      {/* Layer 2: Deep Aesthetic Gradient (Enhanced Contrast) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-[2]"></div>

      {/* Layer 3: Vignette Effect for focus */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-[3]"></div>
    </div>
  );
};

export default React.memo(BgVideo);
