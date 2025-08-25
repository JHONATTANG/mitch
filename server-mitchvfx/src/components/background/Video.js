import  React, { useRef, useEffect } from 'react';
import "../../assets/css/style.css"

const Video = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
        video.play().catch((err) => {
            console.warn("El navegador bloqueó el autoplay:", err);
        });
        }
    }, []);
    return (
        <video id="background-video" ref={videoRef} autoPlay loop muted>
            <source src="../../../public/assets/page/background/BG_004_3840x2160.mp4" type="video/mp4" />
        </video>
    );
}


export default Video;