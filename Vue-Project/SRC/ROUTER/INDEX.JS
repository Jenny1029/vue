/**
 *  Simple Vue Demo 
 *    @ About Route Config
 * 
 */


// Basic Import

import Vue from 'vue'
import Router from 'vue-router'


// Route Components

import Hello from '@/components/Hello'
import products from '@/view/products/overview'
import drinks from '@/view/products/drinks'
import foods from '@/view/products/foods'


// Basic Config
Vue.use(Router)

//  Detail Config
export default new Router({
  routes: [
    {
      path: '/products',
      name: 'products',
      component: products,
      children: [
          {
            path: '/products/drinks',
            name: 'drinks',
            component: drinks
          },{
            path: '/products/foods',
            name: 'foods',
            component: foods
          }
      ]
    }
  ]
})
