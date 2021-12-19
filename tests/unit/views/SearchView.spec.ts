import SearchView from '@/views/SearchView.vue';
import SearchForm from '@/components/SearchForm.vue';
import { router } from '@/plugins/router';
import { shallowMount } from '@vue/test-utils';
import { qaRef } from '../mocks';

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

  const setup = async (keyword?: string) => {
    router.push('/');
    await router.isReady();
    return createWrapper(keyword);
  }

  it('displays root element', async () => {
    const wrapper = await setup();
    const element = wrapper.find(selectors.root);
    expect(element.exists()).toBe(true);
  });

  it('provides keyword provided', async () => {
    const wrapper = await setup('test');
    const element = wrapper.findComponent(SearchForm);
    expect(element.attributes('keyword')).toEqual('test');
  });

  it('updates keyword after event update:keyword', async () => {
    const wrapper = await setup();
    const element = wrapper.findComponent(SearchForm);
    await element.vm.$emit('update:keyword', 'test');
  });
});
