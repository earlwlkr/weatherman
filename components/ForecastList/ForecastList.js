import ForecastItem from 'components/ForecastItem';

import styles from './ForecastList.module.css';

export default function ForecastList({ items }) {
  if (!items.length) {
    return <div>No items</div>
  }
  console.log(items);
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <ForecastItem data={item} />
      ))}
    </div>
  );
}
