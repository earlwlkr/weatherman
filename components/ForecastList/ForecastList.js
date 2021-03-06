import ForecastItem from 'components/ForecastItem';

import styles from './ForecastList.module.css';

export default function ForecastList({ items }) {
  if (!items.length) {
    return <div>No items</div>;
  }

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <ForecastItem key={item.date} data={item} />
      ))}
    </div>
  );
}
