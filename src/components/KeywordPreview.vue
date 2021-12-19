<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KeywordPreview',
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
});
</script>
<template>
  <div qa-ref="keyword-preview">
    <h2 qa-ref="keyword-preview__title">
      {{ value.keyword }}
    </h2>
  </div>
</template>
