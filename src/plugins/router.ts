import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import UnderConstruction from '@/views/UnderConstruction.vue';
import SearchView from '@/views/SearchView.vue';

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
  } ],
});
