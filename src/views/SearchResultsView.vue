<script lang="ts">
import {
  defineComponent,
} from 'vue';
import KeywordPreview from '@/components/KeywordPreview.vue';
import { apiClient } from '@/services/api';
import { Keyword } from '@/types/keyword';

interface SearchResultsViewData {
  results: Keyword[];
}

export default defineComponent({
  name: 'SearchResultsView',
  components: {
    KeywordPreview,
  },
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
  data(): SearchResultsViewData {
    return {
      results: [],
    }
  },
  watch: {
    async keyword(newValue: string): Promise<void> {
      this.results = await apiClient.search(newValue);
    },
  },
  async mounted(): Promise<void> {
    this.results = await apiClient.search(this.keyword);
  },
})
</script>
<template>
  <div qa-ref="search-results">
    <keyword-preview
      v-for="result in results"
      :key="result.keyword"
      :value="result"
    />
  </div>
</template>
