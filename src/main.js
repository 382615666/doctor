import '@/assets/less/common.less';
import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import router from './router';

import components from '@/components';
import api from '@/api';

Vue.config.productionTip = false;

Vue.prototype.$api = api;

components.forEach(module => {
  Vue.component(module.default.name, module.default);
});

Vue.use(MintUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
