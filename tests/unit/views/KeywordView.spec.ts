import {
  shallowMount,
} from '@vue/test-utils';
import { qaRef } from '../mocks';
import KeywordView from '@/views/KeywordView.vue';

const selectors = {
  root: qaRef('keyword-view'),
  title: qaRef('keyword-view__title'),
};

describe('KeywordView', () => {
  const createWrapper = (keyword = 'test') => shallowMount(KeywordView, {
    props: {
      keyword,
    },
  });

  it('renders successully', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });

  it('renders keyword', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(selectors.title);
    expect(element.text()).toBe('test');
  });
});
