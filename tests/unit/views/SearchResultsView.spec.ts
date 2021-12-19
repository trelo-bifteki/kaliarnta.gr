import { shallowMount } from '@vue/test-utils';
import { qaRef } from '../mocks';
import SearchResultsView from '@/views/SearchResultsView.vue';

const selectors = {
  root: qaRef('search-results'),
}

describe('SearchResultsView', () => {
  const createWrapper = () => shallowMount(SearchResultsView);
  it('loads successfully', () => {
    const wrapper = createWrapper();
    const rootElement = wrapper.find(selectors.root);
    expect(rootElement.exists()).toBe(true);
  })
});
