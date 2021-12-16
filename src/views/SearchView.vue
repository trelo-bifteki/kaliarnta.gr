<script lang="ts">
import {
  defineComponent,
} from 'vue';

import SearchForm from '@/components/SearchForm.vue';
import {
  SearchFormInput,
} from '@/types/search-form';

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
  methods: {
    search(data: SearchFormInput): void {
      console.log(`Search for ${data.keyword}`);
    },
  },
});
</script>
<template>
  <div qa-ref="search-view">
    <search-form
      :keyword="keyword"
      @submit="search"
    />
  </div>
</template>
