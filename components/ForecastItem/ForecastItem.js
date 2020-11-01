import styles from './ForecastItem.module.css';

export default function ForecastItem({ data }) {
  const { date: dateStr, state, stateAbbr, tempMax, tempMin } = data;
  const date = new Date(dateStr);
  return (
    <div className={styles.card}>
      <h3>
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
        {tempMin}°C ~ {tempMax}°C
      </p>
    </div>
  );
}
