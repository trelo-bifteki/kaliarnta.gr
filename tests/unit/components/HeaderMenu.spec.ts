import HeaderMenu from '@/components/HeaderMenu.vue';
import {
  shallowMount,
} from '@vue/test-utils';
import { qaRef } from '../mocks';

const selectors = {
  root: qaRef('header-menu'),
};

describe('HeaderMenu', () => {
  const createWrapper = () => shallowMount(HeaderMenu);
  it('renders', () => {
    const wrapper = createWrapper();
    const rootElement = wrapper.find(selectors.root);
    expect(rootElement.exists()).toBe(true);
  });
});
