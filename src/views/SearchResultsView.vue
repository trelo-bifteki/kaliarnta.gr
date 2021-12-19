<script lang="ts">
import {
  defineComponent,
} from 'vue';
import KeywordPreview from '@/components/KeywordPreview.vue';
import { apiClient } from '@/services/api';
import { Keyword } from '@/types/Keyword';

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
