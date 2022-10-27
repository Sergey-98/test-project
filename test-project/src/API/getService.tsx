import { Address } from '../types/types';

export function getData(answer: string): Promise<Address> {
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

  // const response = await fetch(url, options);

  // if (response.ok) {
  //   const json = await response.text();
  //   return json;
  // } else {
  //   alert('Ошибка HTTP: ' + response.status);
  // }

  return fetch(url, options)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log('error', error));
}
