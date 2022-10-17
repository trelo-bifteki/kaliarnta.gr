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
  <article
    qa-ref="keyword-view"
    class="text-left"
  >
    <h2
      qa-ref="keyword-view__title"
      class="font-serif text-3xl py-4"
    >
      {{ keyword }}
    </h2>
    <div v-if="data">
      <div qa-ref="keyword-view__description">
        {{ data.description }}
      </div>
      <div
        class="py-4"
        qa-ref="keyword-view__translations"
      >
        <h3 class="text-xl">
          Μετάφραση
        </h3>
        <ul>
          <li
            v-for="translation in data.translations"
            :key="translation"
            qa-ref="keyword-view__translation"
          >
            {{ translation }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
