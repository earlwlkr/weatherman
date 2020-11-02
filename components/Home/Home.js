import * as React from 'react';
import useSWR from 'swr';
import debounce from 'lodash/debounce';

import { useTemperatureUnitFunctions } from 'contexts/TemperatureUnitContext';
import SearchBar from 'components/SearchBar';
import ForecastView from 'components/ForecastView';
import styles from './Home.module.css';

const fetchForecast = (url, query) =>
  fetch(url + `?q=${query}`).then((r) => r.json());

export default function Home({ initQuery }) {
  const [query, setQuery] = React.useState(initQuery);
  const { error, data } = useSWR(
    ['/api/weather/forecastNext5Days', query],
    fetchForecast
  );
  const { switchToCelsius, switchToFahrenheit } = useTemperatureUnitFunctions();
  const isLoading = !data;

  const onQueryChange = debounce((text) => {
    setQuery(text);
  }, 500);

  React.useLayoutEffect(() => {
    window.history.pushState('', '', `/${query || ''}`);
  }, [query]);

  if (error) {
    console.log('fetch forecast error', error);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Weatherman</h1>

        <p className={styles.description}>
          <SearchBar onChange={onQueryChange} />
          <button onClick={switchToCelsius}>°C</button>
          <button onClick={switchToFahrenheit}>°F</button>
        </p>

        {isLoading ? <div>Loading...</div> : <ForecastView data={data} />}
      </main>
    </div>
  );
}
