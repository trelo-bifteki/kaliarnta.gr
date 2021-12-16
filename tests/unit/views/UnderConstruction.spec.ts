import UnderConstruction from '@/views/UnderConstruction.vue';
import {
  shallowMount,
} from '@vue/test-utils';
import {
  qaRef,
} from '../mocks';

const selectors = {
  root: qaRef('under-construction'),
};

describe('UnderConstruction', () => {
  it('displays root element', () => {
    const wrapper = shallowMount(UnderConstruction);
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });
});
