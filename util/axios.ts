import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { API } from '../config/config';
import { IUser } from '../interface/auth.interface';
const baseURL = API;

const request = axios.create({ baseURL });

request.interceptors.request.use(async (config: any) => {
  const token = await localStorage.getItem('token');
  if (token) {
    const usuario = jwtDecode<IUser>(token);
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    //checking for time expiration of the token
    if (secondsSinceEpoch > parseInt(usuario.exp + '')) {
      await localStorage.removeItem('token');
      window.location.href = '/';
      return;
    }
  }
  // const resIp = await axios.get("http://api.ipify.org/?format=json");
  config.headers['Authorization'] = `Bearer ${token}`;
  // config.headers["ip"] = resIp.data.ip;
  // config.headers["navegador"] = navigator.userAgent;
  config.headers['Content-Type'] = 'application/json';
  return config;
});

request.interceptors.response.use(
  async (response: any) => {
    return response;
  }
  // async (error: any) => {
  //   if (401 === error.response.status) {
  //     if (error.response.data) {
  //       if (error.response.data.msg === 'Token is expired') {
  //         window.location.href = '/';
  //         return error;
  //       }
  //     }
  //   }
  //   if (403 === error.response.status) {
  //     if (error.response.data) {
  //       if (error.response.data.msg === 'Token is expired') {
  //         window.location.href = '/';
  //         return error;
  //       }
  //     }
  //   }
  //   return Promise.reject(error);
  // }
);

export default request;
