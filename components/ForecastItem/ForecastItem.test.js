import * as React from 'react';
import { render, fireEvent, waitFor, screen } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';

import ForecastItem from './ForecastItem';

test('renders ForecastItem correctly', async () => {
  render(
    <ForecastItem
      data={{
        date: 1604330687999,
        state: 'Showers',
        stateAbbr: 'S',
        tempMax: 30,
        tempMin: 23,
      }}
    />
  );

  expect(
    screen.getByRole('heading', { name: 'Day of week' })
  ).toHaveTextContent('Monday');
  expect(
    screen.getByRole('heading', { name: 'Date' })
  ).toHaveTextContent('2/11/2020');
  expect(
    screen.getByRole('presentation', { name: 'Forecast state' })
  ).toHaveTextContent('Showers');
  expect(
    screen.getByRole('presentation', { name: 'Temperatures' })
  ).toHaveTextContent('23°C ~ 30°C');
});
