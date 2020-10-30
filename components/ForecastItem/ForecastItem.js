import styles from './ForecastItem.module.css';

export default function ForecastItem() {
  return (
    <a href="https://nextjs.org/docs" className={styles.card}>
      <h3>Documentation &rarr;</h3>
      <p>Find in-depth information about Next.js features and API.</p>
    </a>
  );
}
