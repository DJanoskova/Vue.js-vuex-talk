import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  actions: {
    async POSTS_FETCH(context) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const posts = response.data.slice(0, 20)
      context.commit('POSTS_SET', posts)

      return posts
    }
  },
  mutations: {
    POSTS_SET(state, data) {
      state.posts = data
    }
  },
  getters: {
    posts(state) {
      return state.posts
    },
    postById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }
  }
})
