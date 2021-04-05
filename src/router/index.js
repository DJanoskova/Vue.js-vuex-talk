import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts from '../views/Posts'
import CreatePost from '../views/CreatePost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'posts',
    component: Posts
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePost
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: CreatePost
  }
]

const router = new VueRouter({
  routes
})

export default router
