<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'posts' }">Posts</router-link> |
      <router-link :to="{ name: 'create' }">New post</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
