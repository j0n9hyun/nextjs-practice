import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>오늘 뭐 먹지?</title>
        <meta name='description' content='오늘 뭐 먹지?' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href='/posts/firstPost'>오늘 뭐 먹지?</Link>
    </div>
  );
}
