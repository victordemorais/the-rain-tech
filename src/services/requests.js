import { request } from '.';

export const investors = request
  .get('/investor/recommended')
  .then((response) => {
    return response.data;
  })
  .catch((e) => {
    return false;
  });

export const professionals = request
  .get('/professionals')
  .then((response) => {
    return response.data;
  })
  .catch((e) => {
    return false;
  });
