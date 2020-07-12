import Vue from 'vue';
import Router from 'vue-router';
import routes from 'vue-auto-routing';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [...routes, { path: '*', redirect: '/404' }],
});
