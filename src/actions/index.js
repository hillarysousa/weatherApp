import axios from 'axios';

const API_KEY = '6dc1c1251101d45f3c7d69421871866e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country) {
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}