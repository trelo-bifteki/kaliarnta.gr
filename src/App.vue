<template>
  <div :class="$style.app">
    <article :class="$style.appContainer">
      <title-logo :class="$style.appLogo" />
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

<style module>

.app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
               "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
               "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.appContainer {
  padding: 1rem;
}

.appLogo {
  margin-bottom: 1.5rem;
}

.appContainer h2 {
  font-size: 2rem;
  font-weight: 300;
}
</style>
