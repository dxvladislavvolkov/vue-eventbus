import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
