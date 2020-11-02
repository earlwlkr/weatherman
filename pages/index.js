import Head from 'next/head';

import { TemperatureUnitProvider } from 'contexts/TemperatureUnitContext';
import Home from 'components/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Weatherman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TemperatureUnitProvider>
        <Home />
      </TemperatureUnitProvider>
    </>
  );
}
