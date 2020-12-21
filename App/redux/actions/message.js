import http from '../../helpers/http';
import qs from 'qs';

export default {
  postMessage: (token, recipientId, data) => ({
    type: 'POST_MESSAGE',
    payload: http(token).post(
      `message/chat/${recipientId}`,
      qs.stringify(data),
    ),
  }),
  postMessageImage: (token, recipientId, data) => ({
    type: 'POST_MESSAGE',
    payload: http(token).post(`message/chat/${recipientId}`, data),
  }),
  getMessage: (token, recipientId, search = '') => ({
    type: 'GET_MESSAGE',
    payload: http(token).get(`message/list/${recipientId}/?search=${search}`),
  }),
  getMessageScroll: (token, recipientId, search = '', page) => ({
    type: 'GET_MESSAGE_SCROLL',
    payload: http(token).get(
      `message/list/${recipientId}/?search=${search}&page=${page}`,
    ),
  }),
  getMessageList: (token, search = '') => ({
    type: 'GET_MESSAGE_LIST',
    payload: http(token).get(`message/list/?search=${search}`),
  }),
  getMessageListScroll: (token, search = '', page) => ({
    type: 'GET_MESSAGE_LIST_SCROLL',
    payload: http(token).get(`message/list/?search=${search}&page=${page}`),
  }),
  getRecipiendId: (id) => ({
    type: 'GET_RECIPIENT_ID',
    payload: id,
  }),
};
