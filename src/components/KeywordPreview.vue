<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { routes } from '@/plugins/router';

export default defineComponent({
  name: 'KeywordPreview',
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  computed: {
    linkOptions(): RouteLocationRaw {
      return {
        name: routes.keyword,
        params: {
          keyword: this.value.keyword,
        },
      };
    },
  },
});
</script>
<template>
  <router-link
    :to="linkOptions"
    qa-ref="keyword-preview"
    class="bg-gray-100 rounded-xl p-8 dark:bg-gray-800 block ring-1"
  >
    <h2 qa-ref="keyword-preview__title">
      {{ value.keyword }}
    </h2>
  </router-link>
</template>
