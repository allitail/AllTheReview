import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieShowPage'
import aList from '@/components/atrBoard/aList';
import aWrite from '@/components/atrBoard/aWrite';
Vue.use(Router)
export const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/',
     name: 'index',
     component: Index
   },
   {
     path: '/:id',
     name: 'show',
     component: Show
   }
   ,{
    path:'/atrBoard/aList'
    ,name:aList
    ,component:aList
  }
  ,{
    path:'/atrBoard/aWrite'
    ,name:aWrite
    ,component:aWrite
  }
 ]
})