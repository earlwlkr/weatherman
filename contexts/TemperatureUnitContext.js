import * as React from 'react';

const TemperatureUnits = {
  CELSIUS: 1,
  FAHRENHEIT: 2,
};

const TemperatureUnitStateContext = React.createContext();
const TemperatureUnitFunctionsContext = React.createContext();

function TemperatureUnitProvider({ children }) {
  const [mode, setMode] = React.useState(TemperatureUnits.CELSIUS);

  const functions = React.useMemo(
    () => ({
      switchToCelsius: () => setMode(TemperatureUnits.CELSIUS),
      switchToFahrenheit: () => setMode(TemperatureUnits.FAHRENHEIT),
    }),
    []
  );

  return (
    <TemperatureUnitStateContext.Provider value={mode}>
      <TemperatureUnitFunctionsContext.Provider value={functions}>
        {children}
      </TemperatureUnitFunctionsContext.Provider>
    </TemperatureUnitStateContext.Provider>
  );
}

function useTemperatureUnitState() {
  const context = React.useContext(TemperatureUnitStateContext);
  if (context === undefined) {
    throw new Error(
      'useTemperatureUnitState must be used within a TemperatureUnitProvider'
    );
  }
  return context;
}

function useTemperatureUnitFunctions() {
  const context = React.useContext(TemperatureUnitFunctionsContext);
  if (context === undefined) {
    throw new Error(
      'useTemperatureUnitFunctions must be used within a TemperatureUnitProvider'
    );
  }
  return context;
}

export {
  TemperatureUnits,
  TemperatureUnitProvider,
  useTemperatureUnitState,
  useTemperatureUnitFunctions,
};
