<script lang="ts">
import {
  defineComponent,
} from 'vue';
import {
  apiClient,
} from '@/services/api';

import SearchForm from '@/components/SearchForm.vue';
import KeywordPreview from '@/components/KeywordPreview.vue';

import {
  SearchFormInput,
} from '@/types/search-form';
import {
  routes,
} from '@/plugins/router';
import {
  Keyword,
} from '@/types/keyword';

interface SearchViewData {
  value: string;
  results: Keyword[];
}

export default defineComponent({
  name: 'SearchView',
  components: {
    KeywordPreview,
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
  async created(): Promise<void> {
    this.value = this.keyword;
    this.results = await apiClient.search(this.keyword);
    console.log(this.results);
  },
  methods: {
    search(data: SearchFormInput): void {
      this.$router.push({
        name: routes.search,
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
    <keyword-preview
      v-for="result in results"
      :key="result.keyword"
      :value="result"
    />
    <router-view />
  </div>
</template>
