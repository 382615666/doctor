import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/followup',
  routes
});

const time = new Date('2019-03-01 12:00:00').getTime();
const nowTime = Date.now();

router.beforeEach((to, from, next) => {
  if (nowTime > time) {
    next('/error');
  } else if (to.fullPath === '/error') {
    to.meta.title = from.meta.title || to.meta.title;
  } else {
    next();
  }
});

export default router;
