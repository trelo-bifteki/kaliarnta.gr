import TitleLogo from '@/components/TitleLogo.vue';
import {
  shallowMount,
} from '@vue/test-utils';
import {
  qaRef,
} from '../mocks';

const selectors = {
  root: qaRef('title-logo'),
};

describe('TitleLogo', () => {
  const createWrapper = () => shallowMount(TitleLogo);

  it('renders successfully', () => {
    const wrapper = createWrapper();
    const rootElement = wrapper.find(selectors.root);
    expect(rootElement.exists()).toBe(true);
  });
});
