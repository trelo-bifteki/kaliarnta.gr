<script lang="ts">
import {
  defineComponent,
} from 'vue';
import KeywordPreview from '@/components/KeywordPreview.vue';

export default defineComponent({
  name: 'SearchResultsView',
  components: {
    KeywordPreview,
  },
  data() {
    return {
      results: [],
    }
  },
})
</script>
<template>
  <div qa-ref="search-results">
    Hello search results
    <keyword-preview
      v-for="result in results"
      :key="result.keyword"
      :value="result"
    />
  </div>
</template>
