import { createApp } from 'vue';
import { createPinia } from 'pinia';
import FloatingVue from 'floating-vue';

import App from './App.vue';
import './style.css';
import 'floating-vue/dist/style.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(FloatingVue);
app.mount('#app');
