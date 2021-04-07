<template>
  <div class="post-container">
    <h3>{{ post.title }}</h3>
    <div class="post-body">
      {{ post.body }}
    </div>
    <div class="post-actions">
      <router-link :to="{ name: 'edit', params: { id: post.id } }">Edit</router-link>
      |
      <a @click="handleDelete">Delete</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    post: Object
  },
  methods: {
    ...mapActions([
      'POST_DELETE'
    ]),
    handleDelete () {
      this.POST_DELETE(this.post.id)
    }
  }
}
</script>