import Head from 'next/head';

import { TemperatureUnitProvider } from 'contexts/TemperatureUnitContext';
import Home from 'components/Home';

export default function Index({ initQuery }) {
  return (
    <>
      <Head>
        <title>Weatherman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TemperatureUnitProvider>
        <Home initQuery={initQuery} />
      </TemperatureUnitProvider>
    </>
  );
}

export async function getServerSideProps({ params, query = '' }) {
  // const res = await fetch(`${process.env.BASE_URL}/api/weather/forecastNext5Days?q=${params.location}`);
  // const data = await res.json();

  return { props: { initQuery: params.location } };
}
