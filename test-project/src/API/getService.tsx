// import axios from 'axios';

export function getData(answer: string) {
  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  const token = '7c010071c9e47ff9c70ebc46de922c0e9791726b';
  const options: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify({ query: answer }),
  };

  return fetch(url, options)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log('error', error));
  // return axios.get(`http://www.omdbapi.com/?apikey=7347c4fe&s=${answer}`);
}
