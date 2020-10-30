import Head from 'next/head';
import useSWR from 'swr';

import styles from '../styles/Home.module.css';
import SearchBar from 'components/SearchBar';
import ForecastList from 'components/ForecastList';

const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  const { error, data } = useSWR('/api/weather/forecastNext5Days?q=ho+chi+minh', fetcher);
  return (
    <div className={styles.container}>
      <Head>
        <title>Weatherman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Weatherman</h1>

        <p className={styles.description}>
          <SearchBar />
        </p>

        <h2>{data?.location}</h2>

        <ForecastList items={data?.forecast || []} />
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
