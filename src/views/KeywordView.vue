<script lang="ts">
import { Keyword } from '@/types/keyword';
import { defineComponent } from 'vue';
import { apiClient } from '@/services/api';

interface KeywordViewData {
  data?: Keyword;
}

export default defineComponent({
  name: 'KeywordView',
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
  data(): KeywordViewData {
    return {
      data: undefined,
    };
  },
  watch: {
    keyword(newValue: string) {
      this.updateKeyword(newValue);
    },
  },
  async mounted(): Promise<void> {
    await this.updateKeyword(this.keyword);
  },
  methods: {
    async updateKeyword(_keyword: string): Promise<void> {
      this.data = await apiClient.get(_keyword);
    },
  },
})
</script>
<template>
  <div qa-ref="keyword-view">
    <h2 qa-ref="keyword-view__title">
      {{ keyword }}
    </h2>
    <div v-if="data">
      <div qa-ref="keyword-view__description">
        {{ data.description }}
      </div>
    </div>
  </div>
</template>
