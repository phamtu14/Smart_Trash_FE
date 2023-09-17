import axios from 'axios';
import Cookies from 'js-cookie';
import Notice from '../res/components/Notice';
import { COOKIES } from './constants';
import { handleError } from './handleError';
import { MOCK_DATA_GET } from '../mockData/mockDataGet';
import { MOCK_DATA_POST } from '../mockData/mockDataPost';
import { logOut } from '../res/commonFunction';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    if (response.data.status === 1 || response.data.status === -1) {
      if (response.data.object === 'Token đã hết hạn') logOut();
      Notice({ msg: response.data.object, isSuccess: false });
    }
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const instance = axios.create({
  baseURL: 'https://localhost:7145',
});

instance.defaults.timeout = 25000;

instance.interceptors.request.use(req => {
  req.headers.Authorization = `${Cookies.get(COOKIES.accessTokenTest)}`;
  return req;
});

instance.interceptors.response.use(
  response => response,
  error => {
    const responseError = {
      ...error,
      response: {
        ...error.response,
      },
    };

    if (error.response) {
      handleError(error.response);
    }

    return responseError;
  },
);

export async function axiosGet(path) {
  if (MOCK_DATA_GET[path] && MOCK_DATA_GET[path].switch)
    return MOCK_DATA_GET[path];
  const res = await instance
    .get(path)
    .then(checkStatus)
    .catch(error => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}

export async function axiosPost(path, body) {
  if (MOCK_DATA_POST[path] && MOCK_DATA_POST[path].switch)
    return MOCK_DATA_POST[path];
  const res = await instance
    .post(path, body)
    .then(checkStatus)
    .catch(error => {
      if (!JSON.parse(JSON.stringify(error)).response) throw error;
    });
  return res;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
// export default function request(url, options) {
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON);
// }
