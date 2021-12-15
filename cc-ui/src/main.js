import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import button from './components/button.vue'
import dialog from './components/dialog.vue'
Vue.component(button.name, button)
Vue.component(dialog.name, dialog)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
