import http from '../../helpers/http';
import qs from 'qs';

export default {
  getCountry: () => ({
    type: 'GET_COUNTRY',
    payload: http().get('country'),
  }),
  getCountryId: (id) => ({
    type: 'GET_COUNTRY_ID',
    payload: http().get(`country/${id}`),
  }),
};
