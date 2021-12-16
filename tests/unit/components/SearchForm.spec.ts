import SearchForm from '@/components/SearchForm.vue';
import {
  shallowMount,
} from '@vue/test-utils';

import {
  qaRef,
} from '../mocks';

const selectors = {
  root: qaRef('search-form'),
  inputField: qaRef('search-form__term'),
};

describe('SearchForm', () => {
  const createWrapper = () => shallowMount(SearchForm);

  it('displays form', () => {
    const wrapper = createWrapper();
    const rootElement = wrapper.find(selectors.root);
    expect(rootElement.exists()).toBe(true);
  });

  it('contains input field', () => {
    const wrapper = createWrapper();
    const inputElement = wrapper.find(selectors.inputField);
    expect(inputElement.exists()).toBe(true);
  });
});
