import * as React from 'react';
import { render, fireEvent, waitFor, screen } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';

import SearchBar from './SearchBar';

const setup = () => {
  const utils = render(<SearchBar />);
  const input = utils.getByPlaceholderText('Search for location...');
  return {
    input,
    ...utils,
  };
};

test('should show entered text correctly', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'New York' } });
  expect(input.value).toBe('New York');
});
