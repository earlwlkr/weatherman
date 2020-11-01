import React from 'react';

import styles from './SearchBar.module.css';

export default function SearchBar({ onChange }) {
  const onTextChange = React.useCallback((e) => {
    const newValue = e.target.value;
    onChange(newValue)
  }, [onChange]);
  return (
    <input
      placeholder="Search for location..."
      onChange={onTextChange}
      className={styles.search}
    />
  );
}
