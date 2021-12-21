import axios from 'axios';
import Axios, { AxiosInstance, AxiosPromise } from 'axios';
import { Result } from '@/types/search';
import { Keyword } from '@/types/keyword';

export const instance = Axios.create();


export class ApiClient {
  readonly axiosInstance: AxiosInstance;

  constructor(_axiosInstance: AxiosInstance) {
    this.axiosInstance = _axiosInstance;
  }

  async search(keyword: string): Promise<Result[]> {
    const { data } = await axios.get<string, AxiosPromise<Result[]>>('/api/search', {
      params: {
        keyword,
      },
    });
    return data;
  }

  async get(keyword: string): Promise<Keyword> {
    const { data } = await axios.get<string, AxiosPromise<Keyword>>(`/api/search/${keyword}`);
    return data;
  }
}

export const apiClient = new ApiClient(instance);
