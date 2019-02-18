import '@/assets/less/common.less';
import Vue from 'vue';
import App from './App.vue';

import router from './router';

import components from '@/components';

Vue.config.productionTip = false;

components.forEach(module => {
  Vue.component(module.default.name, module.default);
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
