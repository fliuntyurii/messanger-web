import axios, { AxiosInstance } from 'axios'

export const instance: AxiosInstance = axios.create({
  withCredentials: false,
  baseURL: 'https://express-server-slos.onrender.com/api/v1/',
});