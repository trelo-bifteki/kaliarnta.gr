import { shallowMount } from '@vue/test-utils';
import { createKeyword, qaRef } from '../mocks';
import SearchResultsView from '@/views/SearchResultsView.vue';
import KeywordPreview from '@/components/KeywordPreview.vue';
import { apiClient } from '@/services/api';
import { mocked } from 'ts-jest/utils';
jest.mock('@/services/api');

const selectors = {
  root: qaRef('search-results'),
}

describe('SearchResultsView', () => {
  const mockedApiClient = mocked(apiClient);
  const createWrapper = (keyword = 'test') => shallowMount(SearchResultsView, {
    props: {
      keyword,
    },
  });

  beforeEach(() => {
    mockedApiClient.search.mockReset();
  });

  it('loads successfully', () => {
    mockedApiClient.search.mockResolvedValue([]);
    const wrapper = createWrapper();
    const rootElement = wrapper.find(selectors.root);
    expect(rootElement.exists()).toBe(true);
  });

  it('invokes search request', () => {
    mockedApiClient.search.mockResolvedValue([]);
    createWrapper();
    expect(apiClient.search).toHaveBeenCalledWith('test');
  });

  it('fetches data after updating keyword', async () => {
    const wrapper = createWrapper();
    await wrapper.setProps({
      keyword: 'another',
    });
    expect(apiClient.search).toHaveBeenCalledWith('another');
  });

  it.skip('displays a search result', async () => {
    const keyword = createKeyword();
    mockedApiClient.search.mockResolvedValue([ keyword ]);
    const wrapper = createWrapper();
    const searchResults = wrapper.findAllComponents(KeywordPreview);
    await wrapper.vm.$nextTick();
    expect(searchResults.length).toEqual(1);
  });
});
