import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://localhost:3333/',
});
