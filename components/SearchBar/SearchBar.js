import styles from './SearchBar.module.css';

export default function SearchBar() {
  return <input placeholder="Search for location..." className={styles.search} />;
}
