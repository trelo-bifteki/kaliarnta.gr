import SearchView from '@/views/SearchView.vue';
import SearchForm from '@/components/SearchForm.vue';
import {
  router,
} from '@/plugins/router';

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
  const createWrapper = (keyword?: string) => shallowMount(SearchView, {
    props: {
      keyword,
    },
    global: {
      plugins: [ router ],
    },
  });

  it('displays root element', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = createWrapper();
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });

  it('provides keyword provided', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = createWrapper('test');
    const element = wrapper.findComponent(SearchForm);
    expect(element.attributes('keyword')).toEqual('test');
  });
});
