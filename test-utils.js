// test-utils.js
import React from 'react';
import { render } from '@testing-library/react';

import { TemperatureUnitProvider } from 'contexts/TemperatureUnitContext';

const AllTheProviders = ({ children }) => {
  return (
    <TemperatureUnitProvider theme="light">{children}</TemperatureUnitProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
