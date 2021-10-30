import React, { useEffect, useState } from 'react';
import Footer from './Footer';

// @todo: animate font weight when sliding in
const HeroSection: React.FC = () => {
  const [beginAnimation, setBeginAnimation] = useState(false);
  const [headerFooterHeight, setHeaderFooterHeight] = useState(0);

  useEffect(() => {
    const checkHeights = () => {
      const headerHeight = document.querySelector('header').clientHeight;
      const footerHeight = document.querySelector('#hero-footer').clientHeight;

      setHeaderFooterHeight(headerHeight + footerHeight);
    };
    window.addEventListener('resize', checkHeights);
    checkHeights();

    setTimeout(() => setBeginAnimation(true), 500);

    return () => {
      window.removeEventListener('resize', checkHeights);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <section
        className="flex items-center p-8 justify-center"
        style={{ height: `calc(100vh - ${headerFooterHeight}px)` }}
      >
        <h1 className="invisible w-0 h-0">Luis Augusto</h1>
        <svg className="w-0 h-0">
          <defs>
            <clipPath id="topClip">
              <rect x={0} y={0} width={1000} height={255} />
            </clipPath>

            <clipPath id="bottomClip">
              <rect x={0} y={255} width={1000} height={320} />
            </clipPath>

            <clipPath
              id="videoClip"
              clipPathUnits="objectBoundingBox"
              transform="scale(0.001, 0.00173)"
            >
              <text
                clipPath="url(#topClip)"
                fontSize={284}
                x={0}
                y={225}
                className="mono"
                fontStretch="65%"
                fontWeight={900}
              >
                <animate
                  begin="500ms"
                  attributeName="y"
                  values="500;225"
                  dur="1500ms"
                  repeatCount="1"
                  calcMode="spline"
                  keySplines="0.5,0,0.5,0.995"
                />
                Luis
              </text>
              <rect x={0} y={255} width={1000} height={15}>
                <animate
                  begin="500ms"
                  attributeName="width"
                  values="0;1000"
                  dur="1000ms"
                  repeatCount="1"
                  calcMode="spline"
                  keySplines=".5,.01,.5,1"
                />
              </rect>

              <text
                fontSize={284}
                x={0}
                y={505}
                className="mono"
                fontStretch="65%"
                fontWeight={900}
                clipPath="url(#bottomClip)"
              >
                <animate
                  begin="500ms"
                  attributeName="y"
                  values="100;505"
                  dur="1500ms"
                  repeatCount="1"
                  calcMode="spline"
                  keySplines="0.8,0,0.5,0.995"
                />
                Augusto
              </text>
            </clipPath>
          </defs>
        </svg>
        {beginAnimation && (
          <video
            className="max-w-full max-h-full object-cover"
            src="https://res.cloudinary.com/luis-app/video/upload/ac_none,q_auto/v1635184989/luis-app/video-cut-10_mpmsu7.mp4"
            loop
            autoPlay
            muted
            playsInline
            style={{
              clipPath: 'url(#videoClip)',
              aspectRatio: '2/1'
            }}
          />
        )}
      </section>
      <Footer />
    </div>
  );
};

export default HeroSection;
