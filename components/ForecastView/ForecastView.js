import styles from './ForecastView.module.css';
import ForecastList from 'components/ForecastList';

export default function ForecastView({ data }) {
  return (
    <>
      {data?.location && <h2>{data?.location}</h2>}

      <ForecastList items={data?.forecast || []} />
    </>
  );
}
