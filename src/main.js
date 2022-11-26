import Vue from 'vue'
import App from './App.vue'
import "vue-email-dropdown/dist/vue-email-dropdown.css";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
