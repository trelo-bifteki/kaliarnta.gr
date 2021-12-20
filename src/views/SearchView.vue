<script lang="ts">
import { defineComponent } from 'vue';

import SearchForm from '@/components/SearchForm.vue';

import { SearchFormInput } from '@/types/search-form';
import { routes } from '@/plugins/router';
import { Keyword } from '@/types/keyword';

interface SearchViewData {
  value: string;
  results: Keyword[];
}

export default defineComponent({
  name: 'SearchView',
  components: {
    SearchForm,
  },
  props: {
    keyword: {
      type: String,
      default: '',
    },
  },
  data(): SearchViewData {
    return {
      value: '',
      results: [],
    };
  },
  mounted() {
    this.value = this.keyword;
  },
  methods: {
    search(data: SearchFormInput): void {
      this.$router.push({
        name: routes.searchResults,
        query: {
          keyword: data.keyword,
        },
      });
    },
    updateKeyword(newValue: string): void {
      this.value = newValue;
    },
  },
});
</script>
<template>
  <div qa-ref="search-view">
    <search-form
      :keyword="value"
      @update:keyword="updateKeyword"
      @submit="search"
    />
    <router-view />
  </div>
</template>
