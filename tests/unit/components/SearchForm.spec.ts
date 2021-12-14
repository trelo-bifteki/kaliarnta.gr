import SearchForm from '@/components/SearchForm.vue';
import {
  shallowMount,
} from '@vue/test-utils';

import {
  qaRef,
} from '../mocks';

const selectors = {
  root: qaRef('search-form'),
};

describe('SearchForm', () => {
  const createWrapper = () => shallowMount(SearchForm);

  it('displays form', () => {
    const wrapper = createWrapper();
    const rootElement = wrapper.find(selectors.root);
    expect(rootElement.exists()).toBe(true);
  });
});
