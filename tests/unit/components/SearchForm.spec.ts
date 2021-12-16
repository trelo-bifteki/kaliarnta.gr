import SearchForm from '@/components/SearchForm.vue';
import {
  shallowMount,
} from '@vue/test-utils';

import {
  qaRef,
} from '../mocks';

const selectors = {
  root: qaRef('search-form'),
  inputField: qaRef('search-form__keyword'),
};

describe('SearchForm', () => {
  const createWrapper = (keyword?: string) => shallowMount(SearchForm, {
    props: {
      keyword,
    },
  });

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

  it('contains input field with value', () => {
    const wrapper = createWrapper('example');
    const inputElement = wrapper.find(selectors.inputField);
    const element = inputElement.element as HTMLInputElement;
    expect(element.value).toEqual('example');
  });
});
