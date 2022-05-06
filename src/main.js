import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import textVFor from './components/textVFor'
import textVForCanCreateAndDelete from './components/textVForCanCreateAndDelete'
import textRelationShip from './components/textRelationShip'

const router = new VueRouter({
  routes:[
    {
      path:'/textVFor',
      component:textVFor
    },
    { 
      path:'/textVForCanCreateAndDelete',
      component:textVForCanCreateAndDelete
    },
    {
      path:'/textRelationShip',
      component:textRelationShip
    }
  ],
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
