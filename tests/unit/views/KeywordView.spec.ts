import { shallowMount } from '@vue/test-utils';
import { qaRef } from '../mocks';
import KeywordView from '@/views/KeywordView.vue';
import { router } from '@/plugins/router';
import { apiClient } from '@/services/api';
import { mocked } from 'ts-jest/utils';

jest.mock('@/services/api');

const selectors = {
  root: qaRef('keyword-view'),
  title: qaRef('keyword-view__title'),
};

describe('KeywordView', () => {
  const mockedApiClient = mocked(apiClient);
  const createWrapper = (keyword = 'test') => shallowMount(KeywordView, {
    props: {
      keyword,
    },
    global: {
      plugins: [ router ],
    },
  });

  const setupWrapper = async (keyword = 'test') => {
    router.push('/');
    await router.isReady();
    return createWrapper(keyword);
  }

  beforeEach(() => {
    mockedApiClient.get.mockReset();
  });

  it('renders successully', async () => {
    const wrapper = await setupWrapper();
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });

  it('renders keyword', async () => {
    const wrapper = await setupWrapper();
    const element = wrapper.find(selectors.title);
    expect(element.text()).toBe('test');
  });

  it('fetches data at init', async () => {
    await setupWrapper();
    expect(apiClient.get).toHaveBeenCalledWith('test');
  });

  it('fetchers data after updating keywowrd', async () => {
    const wrapper = await setupWrapper();
    await wrapper.setProps({
      keyword: 'another',
    });
    expect(apiClient.get).toHaveBeenCalledWith('another');
  });
});
