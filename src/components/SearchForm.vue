<script lang="ts">
import  {
  defineComponent,
} from 'vue';
import {
  SearchFormInput,
} from '@/types/search-form';

export default defineComponent({
  name: 'SearchForm',
  emits: [ 'submit' ],
  data(): SearchFormInput {
    return {
      term: '',
    };
  },
  methods: {
    submit() {
      this.$emit('submit', this.$data);
    },
  },
});
</script>
<template>
  <form
    id="search-form"
    qa-ref="search-form"
    @submit.prevent="submit"
  >
    <input
      id="search-form__term"
      v-model="term"
      :class="$style.searchFormTerm"
      type="text"
      qa-ref="search-form__term"
    >
  </form>
</template>

<style module>
.searchFormTerm {
  border: 2px solid #333;
  border-radius: 5px;
  padding: 1rem;
}
</style>
