import React, { useEffect, useRef, useState } from 'react';
import Link from '../Link';
import Image from 'next/image';
import aboutImg from './about.jpg';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef) return;

    let observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) =>
        setIsVisible(entry.isIntersecting),
      {
        threshold: 0.5
      }
    );
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return (
    <section
      className="min-h-screen p-8 pt-32 flex lg:flex-row flex-col lg:items-start items-center justify-center overflow-hidden"
      id="about"
      ref={containerRef}
    >
      <article
        className={[
          'flex flex-col gap-4 bg-white p-8 shadow max-w-lg rounded relative z-10 transition-all duration-500',
          isVisible ? 'left-0 opacity-100' : '-left-16 opacity-0'
        ].join(' ')}
      >
        <p>
          Hi there! My name is Luis, and I am a software engineer based in
          Sacramento, CA. I have been programming professionally over 5 years,
          most recently as a staff software engineer at{' '}
          <Link href="https://cerebral.com" isExternal>
            Cerebral
          </Link>
          . My journey into software development back when I was in college
          pursuing a degree in music production. After graduating, I moved to
          California to begin working as a freelance audio programmer and sound
          designer for indie video games. My interests have always involved
          building products, solving solutions, and storytelling, and my current
          endeavor allows me to target those interests towards providing
          accessible mental healthcare.
        </p>{' '}
        <p>
          Outside my career, I have been busy getting ready for my next big hike
          (I hope to finish Half Dome and maybe a marathon in 2022!) while
          travelling to visit each of the national parks with my wife and our
          dog. You can also find us hosting board game nights, completing escape
          rooms, wine tasting, or enjoying the food and culture in different
          parts of the world.
        </p>
      </article>
      <div
        className={[
          'max-w-lg relative top-8  transition-all duration-500 delay-300',
          isVisible
            ? 'opacity-100 lg:-left-12 lg:rotate-6'
            : 'opacity-0 left-16 rotate-12'
        ].join(' ')}
      >
        <Image
          alt="Photo of Luis with family"
          src={aboutImg}
          placeholder="blur"
          width={1200}
          height={1600}
          className="shadow rounded"
        />
      </div>
    </section>
  );
};

export default AboutSection;
