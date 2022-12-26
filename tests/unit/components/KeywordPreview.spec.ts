import {
  mount, RouterLinkStub,
} from '@vue/test-utils';
import KeywordPreview from '@/components/KeywordPreview.vue';
import { createKeyword, qaRef } from '../mocks';

const selectors = {
  root: qaRef('keyword-preview'),
  translation: qaRef('keyword-preview__title'),
};

describe('KeywordPreview', () => {
  const createWrapper = (value = createKeyword()) => mount(KeywordPreview, {
    props: {
      value,
    },
    global: {
      stubs: {
        'router-link': RouterLinkStub,
      },
    },
  });

  it('displays root element', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });

  it('displays translation', () => {
    const wrapper = createWrapper();
    const element = wrapper.find(selectors.translation);
    expect(element.text()).toEqual('test');
  });
});
