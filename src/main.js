import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Student from './components/Student.vue'
import Login from './components/Login.vue'
import Work from './components/Work.vue'
import CNNode from './components/CNNode.vue'


Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  {
    path: '/Student',
    component: Student
  },
  {
    path:'/Login',
    component:Login
  },
  {
    path:'/Work',
    component:Work
  },
  {
    path:'/cnnode',
    component:CNNode
  }
]
Vue.config.productionTip = false
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
