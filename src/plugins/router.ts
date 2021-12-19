import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import UnderConstruction from '@/views/UnderConstruction.vue';
import SearchView from '@/views/SearchView.vue';
import KeywordView from '@/views/KeywordView.vue';
import SearchResultsView from '@/views/SearchResultsView.vue';
import { RouteLocationNormalized } from 'vue-router';

export const routes = {
  search: 'SearchView',
  searchResults: 'SearchResults',
}

const determineKeyword = ({
  query,
  params,
}: RouteLocationNormalized) => ({
  keyword: params.keyword||query.keyword,
});

export const router = createRouter({
  history: createWebHistory(),
  routes: [ {
    path: '/',
    name: 'UnderConstruction',
    component: UnderConstruction,
  }, {
    path: '/search',
    name: routes.search,
    component: SearchView,
    props: determineKeyword,
    children: [ {
      path: '/search',
      name: routes.searchResults,
      component: SearchResultsView,
      props: determineKeyword,
    }, {
      path: '/search/:keyword',
      name: 'KeywordView',
      component: KeywordView,
      props: ({ params }) => ({
        keyword: params.keyword,
      }),
    } ],
  } ],
});
