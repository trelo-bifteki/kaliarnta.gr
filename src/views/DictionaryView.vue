<script lang="ts">
import { defineComponent } from 'vue'
import { apiClient } from '@/services/api';
import { Keyword } from '@/types/keyword';
import KeywordPreview from '@/components/KeywordPreview.vue';

interface DictionaryViewData {
  keywords: Keyword[],
  isLoading: boolean,
}

export default defineComponent({
  components: {
    KeywordPreview,
  },
  data: (): DictionaryViewData => ({
    keywords: [],
    isLoading: false,
  }),
  async created() {
    const page = await apiClient.listAll();
    this.keywords = [
      ...page.content,
    ];
  },
});
</script>

<template>
  <div qa-ref="dictionary-view">
    <keyword-preview
      v-for="keyword in keywords"
      :key="keyword.keyword"
      :value="keyword"
    />
  </div>
</template>
