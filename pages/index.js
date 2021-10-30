import Head from 'next/head';
import HeroSection from 'components/HeroSection';
import Header from 'components/Header';
import AboutSection from '../components/AboutSection';

// @todo: add my own favicon instead of default NextJS one
export default function Home() {
  return (
    <main className="bg-green-100">
      <Head>
        <title>Luis Augusto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
