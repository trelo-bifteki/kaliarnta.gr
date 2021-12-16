import SearchView from '@/views/SearchView.vue';
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
  it('displays root element', () => {
    const wrapper = shallowMount(SearchView);
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });
});
