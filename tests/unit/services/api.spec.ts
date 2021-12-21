import { ApiClient } from '@/services/api';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { createKeyword } from '../mocks';

describe('api', () => {
  const mock = new MockAdapter(axios);
  const apiClient = new ApiClient(axios);

  beforeEach(() => () => {
    mock.reset();
  });

  it('is defined', () => {
    expect(apiClient).toBeDefined();
  });

  it('searches successfully', async () => {
    const keyword = createKeyword();
    mock.onGet('/api/search').reply(200, [ keyword ]);
    const results = await apiClient.search('test');
    expect(results.length).toEqual(1);
  });

  it('gets keyword successfully', async () => {
    const keyword = createKeyword();
    mock.onGet('/api/search/test').reply(200, keyword);
    const result = await apiClient.get('test');
    expect(result).toEqual(keyword);
  });
});
