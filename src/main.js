import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import NavBar from './components/NavBar.vue';
Vue.component('NavBar', NavBar);

import foot from './components/foot.vue';
Vue.component('foot', foot);

Vue.config.productionTip = false
import VuePdfApp from "vue-pdf-app";
Vue.component("vue-pdf-app", VuePdfApp);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
