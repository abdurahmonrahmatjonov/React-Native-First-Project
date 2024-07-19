import axios from 'axios';
import {config} from '../config';

export const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
});

// http.interceptors.request.use(request => {
//   const token = AsyncStorage.getItem('@token');
//   console.log('Http token = ' + token);
//   if (token) {
//     request.headers = {
//       ...request.headers,
//       [config.backendTokenKEY]: `Bearer ${token}`,
//     };
//   }
// }
