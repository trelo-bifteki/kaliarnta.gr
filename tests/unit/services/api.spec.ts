import { ApiClient } from '@/services/api';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { createKeyword } from '../mocks';
import { Page } from '@/types/page';
import { Keyword } from '@/types/keyword';

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
    mock.onGet('/api/keywords').reply(200, [ keyword ]);
    const results = await apiClient.search('test');
    expect(results.length).toEqual(1);
  });

  it('gets keyword successfully', async () => {
    const keyword = createKeyword();
    mock.onGet('/api/keywords/test').reply(200, keyword);
    const result = await apiClient.get('test');
    expect(result).toEqual(keyword);
  });

  it('lists all words in dictionary', async() => {
    const page: Page<Keyword> = {
      number: 1,
      size: 1,
      totalElements: 1,
      totalPages: 1,
      content: [ createKeyword() ],
    };
    mock.onGet('/api/dictionary').reply(200, page);
    const result = await apiClient.listAll();
    expect(result).toEqual(page);
  });
});
