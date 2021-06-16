import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import iframeResize from 'iframe-resizer/js/iframeResizer'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.directive('resize', {
  bind: function(el, { value = {} }) {
    el.addEventListener('load', () => iframeResize(value, el))
  },
  unbind: function (el) {
    el.iFrameResizer.removeListeners();
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
