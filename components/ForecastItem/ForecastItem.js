import styles from './ForecastItem.module.css';

export default function ForecastItem({ data }) {
  const { date: dateStr, state, stateAbbr, tempMax, tempMin } = data;
  const date = new Date(dateStr);
  return (
    <div className={styles.card}>
      <h3>
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </h3>
        <img src={`https://www.metaweather.com/static/img/weather/${stateAbbr}.svg`} width={50} />
      <p>
        {state}
      </p>
      <p>
        {tempMin} ~ {tempMax}
      </p>
    </div>
  );
}
