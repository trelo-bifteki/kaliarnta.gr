import {
  shallowMount,
} from '@vue/test-utils';
import KeywordPreview from '@/components/KeywordPreview.vue';
import { createKeyword, qaRef } from '../mocks';

const selectors = {
  root: qaRef('keyword-preview'),
};

describe('KeywordPreview', () => {
  const createWrapper = (value = createKeyword()) => shallowMount(KeywordPreview, {
    props: {
      value,
    },
  });

  it('displays root element', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });
});
