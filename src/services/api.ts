import axios from 'axios';
import Axios, { AxiosInstance, AxiosPromise } from 'axios';
import { Result } from '@/types/search';
import { Keyword } from '@/types/keyword';
import { Page } from '@/types/page';

export const instance = Axios.create();


export class ApiClient {
  readonly axiosInstance: AxiosInstance;

  constructor(_axiosInstance: AxiosInstance) {
    this.axiosInstance = _axiosInstance;
  }

  async search(keyword: string): Promise<Result[]> {
    const { data } = await axios.get<string, AxiosPromise<Result[]>>('/api/keywords', {
      params: {
        keyword,
      },
    });
    return data;
  }

  async get(keyword: string): Promise<Keyword> {
    const { data } = await axios.get<string, AxiosPromise<Keyword>>(`/api/keywords/${keyword}`);
    return data;
  }

  async listAll(): Promise<Page<Keyword>> {
    const { data } = await axios.get('/api/dictionary');
    return data;
  }
}

export const apiClient = new ApiClient(instance);
