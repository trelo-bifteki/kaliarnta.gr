import SearchView from '@/views/SearchView.vue';
import SearchForm from '@/components/SearchForm.vue';

import {
  shallowMount,
} from '@vue/test-utils';
import {
  qaRef,
} from '../mocks';

const selectors = {
  root: qaRef('search-view'),
};

describe('UnderConstruction', () => {
  const createWrapper = (keyword?: string) => shallowMount(SearchView, {
    props: {
      keyword,
    },
  });

  it('displays root element', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });

  it('provides keyword provided', () => {
    const wrapper = createWrapper('test');
    const element = wrapper.findComponent(SearchForm);
    expect(element.attributes('keyword')).toEqual('test');
  });
});
