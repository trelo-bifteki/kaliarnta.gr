<script lang="ts">
import  {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'SearchForm',
})
</script>
<template>
  <form
    id="search-form"
    qa-ref="search-form"
  >
    <input
      id="search-form__term"
      type="text"
      qa-ref="search-form__term"
    >
  </form>
</template>
