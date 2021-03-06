// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import Axios from 'axios'
import 'view-design/dist/styles/iview.css'
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.prototype.$ajax = Axios
Vue.config.productionTip = false
Vue.use(ViewUI)
// 引入echarts
const echarts = require('echarts');
Vue.prototype.$echarts = echarts
import 'echarts-liquidfill'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  data: {
    event: new Vue()
  },
  template: '<App/>'
})
