<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'KeywordView',
  props: {
    keyword: {
      type: String,
      required: true,
    },
  },
})
</script>
<template>
  <div qa-ref="keyword-view">
    <h2>{{ keyword }}</h2>
  </div>
</template>
