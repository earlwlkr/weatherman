import {
  TemperatureUnits,
  useTemperatureUnitState,
} from 'contexts/TemperatureUnitContext';
import { convertCToF, dayOfWeek } from 'common/utils';

import styles from './ForecastItem.module.css';

function formatAsUnit(unit) {
  return function (tempCelsius) {
    let unitStr;
    switch (unit) {
      case TemperatureUnits.FAHRENHEIT: {
        const tempFahrenheit = convertCToF(tempCelsius);
        unitStr = `${tempFahrenheit}°F`;
        break;
      }
      default:
      case TemperatureUnits.CELSIUS: {
        unitStr = `${tempCelsius}°C`;
        break;
      }
    }
    return unitStr;
  };
}

export default function ForecastItem({ data }) {
  const temperatureUnit = useTemperatureUnitState();
  const formatTempFunc = formatAsUnit(temperatureUnit);

  const { date: dateStr, state, stateAbbr, tempMax, tempMin } = data;
  const date = new Date(dateStr);
  return (
    <div className={styles.card}>
      <h3>
        <div>{dayOfWeek(date)}</div>
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </h3>
      <div className={styles.state}>
        <p className={styles.stateText}>{state}</p>
        <img
          src={`https://www.metaweather.com/static/img/weather/${stateAbbr}.svg`}
          className={styles.icon}
        />
      </div>
      <p className={styles.temps}>
        {formatTempFunc(tempMin)} ~ {formatTempFunc(tempMax)}
      </p>
    </div>
  );
}
