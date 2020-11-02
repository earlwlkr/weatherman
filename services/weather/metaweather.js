export async function forecastNext5Days(query) {
  const data = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${query}`
  ).then((res) => res.json());

  if (!data) {
    return {
      location: '',
      forecast: [],
    };
  }

  const location = data[0];
  const response = await fetch(
    `https://www.metaweather.com/api/location/${location.woeid}`
  ).then((res) => res.json());

  return formatResponse(location.title, response);
}

function formatResponse(title, response) {
  if (!response) {
    return {
      location: title,
      forecast: [],
    };
  }
  const forecast = response.consolidated_weather;
  if (!forecast) {
    return {
      location: title,
      forecast: [],
    };
  }
  return {
    location: title,
    forecast: forecast.slice(0, 5).map((item) => {
      return {
        date: new Date(item.applicable_date),
        state: item.weather_state_name,
        stateAbbr: item.weather_state_abbr,
        tempMin: Math.floor(item.min_temp),
        tempMax: Math.floor(item.max_temp),
      };
    }),
  };
}
