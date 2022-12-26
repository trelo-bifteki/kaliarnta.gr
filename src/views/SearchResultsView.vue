<script lang="ts">
import {
  defineComponent,
} from 'vue';
import KeywordPreview from '@/components/KeywordPreview.vue';
import { apiClient } from '@/services/api';
import { Result } from '@/types/search';

interface SearchResultsViewData {
  results: Result[];
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
      this.updateResults(newValue);
    },
  },
  async mounted(): Promise<void> {
    this.updateResults(this.keyword);
  },
  methods: {
    async updateResults(_keyword: string): Promise<void> {
      this.results = await apiClient.search(_keyword);
    },
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
