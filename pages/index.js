import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Forest from 'components/Forest';

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [displayContent, setDisplayContent] = useState(false);

  useEffect(() => {
    if (windowHeight === 0) return;

    setTimeout(() => {
      setDisplayContent(true);
    }, 2000);
  }, [windowHeight]);

  useEffect(() => {
    const calculateWindowHeight = () =>
      setWindowHeight(document.querySelector('main').clientHeight);
    calculateWindowHeight();

    window.addEventListener('resize', calculateWindowHeight);

    return () => {
      window.removeEventListener('resize', calculateWindowHeight);
    };
  }, []);

  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Luis Augusto</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section className="min-h-screen flex flex-col justify-end items-center overflow-hidden">
        <div
          className="flex flex-col gap-4 items-center transition-all p-8 duration-300"
          style={{ opacity: displayContent ? 1 : 0 }}
        >
          <h1>Luis Augusto</h1>
          <h2>Software Engineer &amp; Traveler</h2>
          <div className="flex items-center gap-4 text-2xl">
            <a
              href="https://twitter.com/itsluisaugusto"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-twitter fab" />
            </a>
            <a
              href="https://github.com/luisaugusto"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-github fab" />
            </a>
            <a
              href="https://www.linkedin.com/in/luisbaugusto"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-linkedin fab" />
            </a>
          </div>
        </div>
        <Forest
          windowHeight={windowHeight}
          style={{ opacity: windowHeight ? 1 : 0 }}
        />
      </section>
    </main>
  );
}
