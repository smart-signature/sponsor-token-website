// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueConfig from 'vue-config';
import VueLazyload from 'vue-lazyload';
import VueResource from 'vue-resource';
import * as config from '@/config';
import App from './App';
import i18n from './i18n';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueLazyload);
Vue.use(vueConfig, config);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>',
});
