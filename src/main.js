import Vue from 'vue'
import CompApi from '@vue/composition-api'
import App from './App.vue'

Vue.use(CompApi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
