import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './router/router.guard'
import ElementUI from 'element-ui';
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
