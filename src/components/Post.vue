<template>
  <div class="post-container">
    <h3>{{ post.title }}</h3>
    <div class="post-body">
      {{ post.body }}
    </div>
    <div class="post-actions">
      <router-link :to="{ name: 'edit', params: { id: post.id } }">Edit</router-link>
      |
      delete
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>