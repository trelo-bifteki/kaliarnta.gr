import axios from 'axios';
import Axios, { AxiosInstance, AxiosPromise } from 'axios';
import { Result } from '@/types/search';

export const instance = Axios.create();


class ApiClient {
  readonly axiosInstance: AxiosInstance;

  constructor(_axiosInstance: AxiosInstance) {
    this.axiosInstance = _axiosInstance;
  }

  async search(keyword: string): Promise<Result[]> {
    const response = await axios.get<string, AxiosPromise<Result[]>>('/api/search', {
      params: {
        keyword,
      },
    });
    return response.data;
  }
}

export const apiClient = new ApiClient(instance);
