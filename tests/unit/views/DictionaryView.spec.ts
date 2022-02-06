import { shallowMount } from '@vue/test-utils';
import { createKeyword, createPage, qaRef } from '../mocks';
import DictionaryView from '@/views/DictionaryView.vue';
import KeywordPreview from '@/components/KeywordPreview.vue';
import { apiClient } from '@/services/api';
import { mocked } from 'ts-jest/utils';

jest.mock('@/services/api');

const selectors = {
  root: qaRef('dictionary-view'),
};
describe('DictionaryView', () => {
  const mockApi = mocked(apiClient);
  const createWrapper = () => shallowMount(DictionaryView);

  beforeEach(() => {
    mockApi.listAll.mockReset();
    const keyword = createKeyword();
    const page = createPage(keyword);
    mockApi.listAll.mockResolvedValue(page)
  });

  it('is visible', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });

  it('loads the dictionary', () => {
    createWrapper();
    expect(mockApi.listAll).toHaveBeenCalled();
  });

  it('loads the keyword previews', async() => {
    const wrapper = createWrapper();
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const components = wrapper.findAllComponents(KeywordPreview);
    expect(components.length).toBe(1);
  });

});
