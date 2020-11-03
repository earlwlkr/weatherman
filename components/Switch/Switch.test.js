import * as React from 'react';
import { render, fireEvent, waitFor, screen } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Switch from './Switch';

const setup = () => {
  const utils = render(
    <Switch
      options={[
        { key: 'C', value: '°C' },
        { key: 'F', value: '°F' },
      ]}
      // onChange={onTempUnitChange}
    />
  );
  const input = utils.getByRole('switch');
  return {
    input,
    ...utils,
  };
};

test('should render selected item correctly', () => {
  setup();
  expect(screen.getByText('°C')).toHaveClass('switchItemSelected');
  userEvent.click(screen.getByText('°F'));
  expect(screen.getByText('°F')).toHaveClass('switchItemSelected');
});
