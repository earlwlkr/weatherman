import { forecastNext5Days } from './metaweather';

require('jest-fetch-mock').enableMocks();

test('should have correct response format', async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        title: 'Ho Chi Minh City',
        location_type: 'City',
        woeid: 1252431,
        latt_long: '10.759180,106.662498',
      },
    ])
  );
  fetch.mockResponseOnce(
    JSON.stringify({
      consolidated_weather: [
        {
          id: 5851429018271744,
          weather_state_name: 'Showers',
          weather_state_abbr: 's',
          wind_direction_compass: 'NW',
          created: '2020-11-03T01:00:47.840398Z',
          applicable_date: '2020-11-03',
          min_temp: 23.975,
          max_temp: 32.095,
          the_temp: 30.255,
          wind_speed: 3.6696455067472624,
          wind_direction: 309.0371612307249,
          air_pressure: 1011.5,
          humidity: 71,
          visibility: 11.579562852938837,
          predictability: 73,
        },
        {
          id: 4779312436740096,
          weather_state_name: 'Showers',
          weather_state_abbr: 's',
          wind_direction_compass: 'NNW',
          created: '2020-11-03T01:00:49.676375Z',
          applicable_date: '2020-11-04',
          min_temp: 24.005,
          max_temp: 32.3,
          the_temp: 30.36,
          wind_speed: 3.7308373791749516,
          wind_direction: 338.4998095452205,
          air_pressure: 1012.0,
          humidity: 64,
          visibility: 14.559037719716853,
          predictability: 73,
        },
        {
          id: 5190823789461504,
          weather_state_name: 'Light Rain',
          weather_state_abbr: 'lr',
          wind_direction_compass: 'NNW',
          created: '2020-11-03T01:00:52.580954Z',
          applicable_date: '2020-11-05',
          min_temp: 24.505000000000003,
          max_temp: 31.06,
          the_temp: 28.759999999999998,
          wind_speed: 5.670418285028766,
          wind_direction: 327.88195870607785,
          air_pressure: 1011.0,
          humidity: 71,
          visibility: 11.172564722023385,
          predictability: 75,
        },
        {
          id: 6230753416314880,
          weather_state_name: 'Light Rain',
          weather_state_abbr: 'lr',
          wind_direction_compass: 'N',
          created: '2020-11-03T01:00:55.599419Z',
          applicable_date: '2020-11-06',
          min_temp: 24.085,
          max_temp: 29.11,
          the_temp: 29.545,
          wind_speed: 6.37406783838649,
          wind_direction: 6.359158520091602,
          air_pressure: 1011.0,
          humidity: 71,
          visibility: 13.182700528911159,
          predictability: 75,
        },
        {
          id: 6571521356070912,
          weather_state_name: 'Heavy Rain',
          weather_state_abbr: 'hr',
          wind_direction_compass: 'ENE',
          created: '2020-11-03T01:00:58.654171Z',
          applicable_date: '2020-11-07',
          min_temp: 23.37,
          max_temp: 30.25,
          the_temp: 30.29,
          wind_speed: 5.652488368792916,
          wind_direction: 58.00000000000001,
          air_pressure: 1011.0,
          humidity: 70,
          visibility: 12.21771106736658,
          predictability: 77,
        },
        {
          id: 6197336154832896,
          weather_state_name: 'Heavy Rain',
          weather_state_abbr: 'hr',
          wind_direction_compass: 'NNW',
          created: '2020-11-03T01:01:01.579493Z',
          applicable_date: '2020-11-08',
          min_temp: 23.625,
          max_temp: 31.83,
          the_temp: 30.5,
          wind_speed: 2.9592804024496937,
          wind_direction: 342.0,
          air_pressure: 1010.0,
          humidity: 67,
          visibility: 9.999726596675416,
          predictability: 77,
        },
      ],
      time: '2020-11-03T08:21:19.178831+07:00',
      sun_rise: '2020-11-03T05:45:24.487688+07:00',
      sun_set: '2020-11-03T17:28:31.452480+07:00',
      timezone_name: 'LMT',
      parent: {
        title: 'Vietnam',
        location_type: 'Country',
        woeid: 23424984,
        latt_long: '15.974210,107.868042',
      },
      sources: [
        {
          title: 'BBC',
          slug: 'bbc',
          url: 'http://www.bbc.co.uk/weather/',
          crawl_rate: 360,
        },
        {
          title: 'Forecast.io',
          slug: 'forecast-io',
          url: 'http://forecast.io/',
          crawl_rate: 480,
        },
        {
          title: 'Met Office',
          slug: 'met-office',
          url: 'http://www.metoffice.gov.uk/',
          crawl_rate: 180,
        },
        {
          title: 'OpenWeatherMap',
          slug: 'openweathermap',
          url: 'http://openweathermap.org/',
          crawl_rate: 360,
        },
        {
          title: 'World Weather Online',
          slug: 'world-weather-online',
          url: 'http://www.worldweatheronline.com/',
          crawl_rate: 360,
        },
      ],
      title: 'Ho Chi Minh City',
      location_type: 'City',
      woeid: 1252431,
      latt_long: '10.759180,106.662498',
      timezone: 'Asia/Ho_Chi_Minh',
    })
  );

  const response = await forecastNext5Days('ho chi minh');
  expect(fetch).toHaveBeenCalledTimes(2);
  expect(response).toHaveProperty('location');
  expect(response).toHaveProperty('forecast');
  expect(response.forecast).toHaveLength(5);
});
