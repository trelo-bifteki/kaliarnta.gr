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
    qa-ref="search-form"
    @submit.prevent="submit"
  >
    <input
      :value="keyword"
      name="keyword"
      :class="$style.searchFormKeyword"
      type="text"
      qa-ref="search-form__keyword"
      placeholder="Εύρεση"
      @input="updateInput"
    >
  </form>
</template>

<style module>
.searchFormKeyword {
  border: 2px solid #333;
  border-radius: 5px;
  padding: 1rem;
}
</style>
