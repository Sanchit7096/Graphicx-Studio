import React, { useState, useRef, useEffect } from 'react';
import video1 from '../../assets/Video/Banner nahibusiness ki pehli impression hai.Want your brand to stand outcall for Advertisement -.mp4';
import video2 from '../../assets/Video/GYM SIGN BOARD INSTALLATIONPremium Gym Board Installed! 💡🔥High Quality • Sharp Finishing • Per.mp4';

const BgVideo = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRef = useRef(null);
    const videos = [video1, video2];

    const handleVideoEnd = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    useEffect(() => {
        // Force switch video after 18 seconds as requested
        const timer = setTimeout(() => {
            handleVideoEnd();
        }, 19000);

        return () => clearTimeout(timer);
    }, [currentVideo]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, [currentVideo]);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
            {/* Background Video Implementation */}
            <video
                ref={videoRef}
                key={currentVideo}
                muted
                autoPlay
                playsInline
                onEnded={handleVideoEnd}
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000"
            >
                <source src={videos[currentVideo]} type="video/mp4" />
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

export default BgVideo;
