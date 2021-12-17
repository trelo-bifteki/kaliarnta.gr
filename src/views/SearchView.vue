<script lang="ts">
import {
  defineComponent,
} from 'vue';
import {
  apiClient,
} from '@/services/api';

import SearchForm from '@/components/SearchForm.vue';
import {
  SearchFormInput,
} from '@/types/search-form';
import {
  routes,
} from '@/plugins/router';

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
  data() {
    return {
      value: '',
    };
  },
  created(): void {
    this.value = this.keyword;
    apiClient.search(this.keyword);
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
    <router-view />
  </div>
</template>
