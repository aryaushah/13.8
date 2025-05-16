import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>13.8 Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="font-sans text-gray-900">
        <Hero />
      </main>
    </>
  );
} 