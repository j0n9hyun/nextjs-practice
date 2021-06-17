import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/Home.module.scss';
export default function firstPost() {
  return (
    <>
      <Head>
        <title>페이지1</title>
      </Head>
      <div className={styles.home}>
        <Link href='../'>ㅁㄴㅇ</Link>
      </div>
      <Image src='/images/jjong.png' width={150} height={50} alt='' />
    </>
  );
}
