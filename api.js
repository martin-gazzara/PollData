import axios from 'axios';

export const getJokeService = () => {
  return axios.get('https://api.chucknorris.io/jokes/random')
    .then(res => res.data.value)
    .catch(err => err);
}