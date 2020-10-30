import { forecastNext5Days } from 'services/weather/metaweather';

export default async (req, res) => {
  const {
    query: { q: query },
    method,
  } = req;

  let result = {};
  try {
    console.log(query);
    result = await forecastNext5Days(query);
  } catch (err) {}

  res.statusCode = 200;
  return res.json(result);
};
