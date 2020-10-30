import Head from 'next/head';

import styles from '../styles/Home.module.css';
import SearchBar from 'components/SearchBar';
import ForecastList from 'components/ForecastList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weatherman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Weatherman
        </h1>

        <p className={styles.description}>
          <SearchBar />
        </p>

        <ForecastList items={[]} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
