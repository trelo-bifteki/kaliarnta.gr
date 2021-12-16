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
  methods: {
    search(data: SearchFormInput): void {
      console.log(`Search for ${data.term}`);
    },
  },
});
</script>
<template>
  <div qa-ref="search-view">
    <search-form @submit="search" />
  </div>
</template>
