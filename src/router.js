import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from "./views/Index";
import Contact from "./components/Contact";
import About from "./components/About";
import JoinUs from "./components/JoinUs";
import Adress from "./components/Adress";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
      component: Home,
      children:[
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path:'/contact',
          name:'contact',
          component:Contact
        },
        {
          path:'/about',
          name:'about',
          component:About
        },
        {
          path:'/joinUs',
          name:'joinUs',
          component:JoinUs
        },
        {
          path:'/adress',
          name:'adress',
          component:Adress
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
