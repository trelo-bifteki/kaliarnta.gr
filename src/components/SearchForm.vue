<script lang="ts">
import  {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'SearchForm',
  props: {
    keyword: {
      type: String,
      default: '',
    },
  },
  emits: [ 'submit', 'update:keyword' ],
  methods: {
    submit() {
      this.$emit('submit', {
        keyword: this.keyword,
      });
    },
    updateInput(event: InputEvent): void {
      const target = event.target as HTMLInputElement;
      this.$emit('update:keyword', target.value);
    },
  },
});
</script>
<template>
  <form
    id="search-form"
    class="px-8 pt-6 pb-8 mb-4 flex"
    qa-ref="search-form"
    @submit.prevent="submit"
  >
    <input
      :value="keyword"
      name="keyword"
      class="shadow appearance-none border mr-2
        rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      qa-ref="search-form__keyword"
      placeholder="Εύρεση"
      @input="updateInput"
    >
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
        rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Εύρεση
    </button>
  </form>
</template>
