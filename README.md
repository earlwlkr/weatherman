# Weatherman

https://weatherman.vercel.app

## Running Locally

```
yarn
yarn dev
```

Project should be running at http://localhost:3000

## Test

```
yarn test
```

## Features

- Search for location to view weather forecast for next 5 days
- Can copy URLs to share conveniently
- Able to switch temperature unit
- Designed to replace weather service easily

## Technologies

- **NextJS 10**: file-system routing, server-side rendering and host API service.
- **ReactJS**: build user interfaces.
- **SWR**: React Hooks for data fetching (stale-while-revalidate).
- **Lodash**: utilities.

## Project Structure

### Components

All UI components are inside `/components` folder. The layout is:

```
Home
  SearchBar
  ForecastView
    ForecastList
      ForecastItem
```

### Contexts

Selected temperature unit is stored globally as a React Context (TemperatureUnitContext.js)

### Weather service

To implement new service, define a new file in services/weather and expose the function `forecastNext5Days(query)`.

The function must return response in the following format:

```
location: String,
forecast: [
  {
    date: Date,
    state: String,
    stateAbbr: String,
    tempMin: Number,
    tempMax: Number
  }
]
```
