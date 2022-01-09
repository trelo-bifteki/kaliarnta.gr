<template>
  <div class="min-h-screen bg-gray-50 py-6 flex flex-col text-center overflow-hidden sm:py-12">
    <article class="mx-auto">
      <title-logo class="app__form" />
      <router-view />
    </article>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';
import 'reset-css';

import TitleLogo from '@/components/TitleLogo.vue';

export default defineComponent({
  name: 'App',
  components: {
    TitleLogo,
  },
});
</script>
<style>
.app__form {
  max-width: 500px;
  min-width: 100%;
}

</style>
