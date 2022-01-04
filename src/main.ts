import {
  createApp,
} from 'vue'
import App from './App.vue'

import {
  router,
} from './plugins/router';

import './assets/tailwind.css'

const app = createApp(App);

app.use(router);
app.mount('#app')
