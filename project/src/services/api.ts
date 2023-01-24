import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';

import { getToken } from './token';

const BACKEND_URL = 'https://grading.design.pages.academy';
const REQUEST_TIMEOUT = 5000;

const statusErrors = new Set([StatusCodes.BAD_REQUEST, StatusCodes.NOT_FOUND]);
const shouldDisplayError = (response: AxiosResponse) => statusErrors.has(response.status);

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if(token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );

  api.interceptors.response.use(
    (responce) => responce,
    (error: AxiosError<{error: string}>) => {
      if(error.response && shouldDisplayError(error.response)) {
        toast.error(`${error.response.data.error}`);
      }

      throw error;
    }
  );

  return api;
};
