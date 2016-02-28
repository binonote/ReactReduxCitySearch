import axios from 'axios';

const API_KEY = '5857652930e8576da779893cf6fca256';
const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(term) {
  const url = baseURL + term + ',us&appid=' + API_KEY;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
