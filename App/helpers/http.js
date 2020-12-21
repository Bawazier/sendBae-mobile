import {default as axios} from 'axios';

import {REACT_APP_API_URL} from '@env';

export default (token = false) => {
  console.log(REACT_APP_API_URL);
  return axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
};
