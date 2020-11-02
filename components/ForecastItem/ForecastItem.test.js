import * as React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TemperatureUnitProvider } from '../../contexts/TemperatureUnitContext';
import ForecastItem from './ForecastItem';

beforeEach(() => {
  return initializeCityDatabase();
});

test('renders correctly', async () => {
  render(
    <TemperatureUnitProvider>
      <ForecastItem
        data={{
          state: 'Showers',
          stateAbbr: 'S',
          tempMax: 30,
          tempMin: 23,
        }}
      />
    </TemperatureUnitProvider>
  );

  fireEvent.click(screen.getByText('Load Greeting'));

  await waitFor(() => screen.getByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toHaveAttribute('disabled');
});
