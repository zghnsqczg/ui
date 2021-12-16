import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import CcButton from './components/button.vue'
import CcDialog from './components/dialog.vue'
import CcInput from './components/input.vue'
import CcSwitch from './components/switch.vue'
import CcRadio from './components/radio.vue'
import CcRadioGroup from './components/radioGroup.vue'
Vue.component(CcButton.name, CcButton)
Vue.component(CcDialog.name, CcDialog)
Vue.component(CcInput.name, CcInput)
Vue.component(CcSwitch.name, CcSwitch)
Vue.component(CcRadio.name, CcRadio)
Vue.component(CcRadioGroup.name, CcRadioGroup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
