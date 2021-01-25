// import { from } from 'core-js/fn/array';
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import('./assets/css/style.css');
import('./assets/css/media.css');
import('/node_modules/swiper/swiper-bundle.css');

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCBbN7J5tn6TFHfR4IfZZwnLgGRkn_UWsE',
    installComponents: false
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
