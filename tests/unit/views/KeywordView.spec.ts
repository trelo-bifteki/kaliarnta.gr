import {
  shallowMount,
} from '@vue/test-utils';
import { qaRef } from '../mocks';
import KeywordView from '@/views/KeywordView.vue';
import { router } from '@/plugins/router';

const selectors = {
  root: qaRef('keyword-view'),
  title: qaRef('keyword-view__title'),
};

describe('KeywordView', () => {
  const createWrapper = (keyword = 'test') => shallowMount(KeywordView, {
    props: {
      keyword,
    },
    global: {
      plugins: [ router ],
    },
  });

  const setupWrapper = async (keyword = 'test') => {
    router.push('/');
    await router.isReady();
    return createWrapper(keyword);
  }

  it('renders successully', async () => {
    const wrapper = await setupWrapper();
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });

  it('renders keyword', async () => {
    const wrapper = await setupWrapper();
    const element = wrapper.find(selectors.title);
    expect(element.text()).toBe('test');
  });
});
