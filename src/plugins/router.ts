import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import UnderConstruction from '@/views/UnderConstruction.vue';
import SearchView from '@/views/SearchView.vue';
import KeywordView from '@/views/KeywordView.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [ {
    path: '/',
    name: 'UnderConstruction',
    component: UnderConstruction,
  }, {
    path: '/search',
    name: 'SearchView',
    component: SearchView,
    props: ({
      query,
      params,
    }) => ({
      keyword: params.keyword||query.keyword,
    }),
    children: [ {
      path: '/search/:keyword',
      name: 'KeywordView',
      component: KeywordView,
      props: ({
        params,
      }) => ({
        keyword: params.keyword,
      }),
    } ],
  } ],
});
