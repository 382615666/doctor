import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/followup',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/error') {
    to.meta.title = from.meta.title || to.meta.title;
  }
  next();
});

export default router;
