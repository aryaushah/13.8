import Head from 'next/head';
import Hero from '../components/Hero';
import TransparentGirls from '../components/TransparentGirls';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arya Shah | The Exploration Company</title>
        <meta name="description" content="Fashion designer and innovator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <TransparentGirls />
      </main>
    </div>
  );
} 