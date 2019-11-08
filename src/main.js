import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAutosize from 'vue-autosize';

Vue.config.productionTip = false;
Vue.use(VueAutosize);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
