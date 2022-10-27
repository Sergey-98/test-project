import axios from 'axios';

export function getData(answer: string) {
  return axios.get(`http://www.omdbapi.com/?apikey=7347c4fe&s=${answer}`);
}
