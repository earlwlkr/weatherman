import * as React from 'react';

import styles from './Switch.module.css';

export default function Switch({ options, onChange }) {
  const [selected, setSelected] = React.useState(0);

  const onSwitchChange = (index) => {
    setSelected(index);
    const value = options[index]?.key;
    if (value) {
      if (typeof onChange === 'function') {
        onChange(value);
      }
    }
  };

  return (
    <div className={styles.switchGroup} role="switch">
      {options.map((option, index) => {
        return (
          <div
            key={option.key}
            className={
              selected === index ? styles.switchItemSelected : styles.switchItem
            }
            onClick={() => onSwitchChange(index)}
          >
            {option.value}
          </div>
        );
      })}
    </div>
  );
}
