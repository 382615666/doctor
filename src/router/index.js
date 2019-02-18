import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/followup',
  routes
});

export default router;
