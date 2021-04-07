<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="Post title" v-model="model.title" />
    <br />
    <textarea placeholder="Post body" v-model="model.body" rows="5" />
    <button type="submit">
      <template v-if="isEdit">Save</template>
      <template v-else>Create</template>
    </button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      model: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'POSTS_FETCH',
      'POST_CREATE',
      'POST_UPDATE'
    ]),
    async handleInputsFill() {
      let posts = this.posts
      if (!posts.length) {
        posts = await this.POSTS_FETCH()
      }

      const { id } = this.$route.params
      if (!id) {
        this.model = {
          title: '',
          body: ''
        }
        return
      }

      const result = posts.find(post => post.id === Number(id))
      this.model = { ...result }
    },
    async handleSubmit () {
      const promise = this.isEdit ? this.POST_UPDATE : this.POST_CREATE
      await promise(this.model)
      this.$router.push({ name: 'posts' })
    }
  },
  computed: {
    ...mapGetters([
      'posts'
    ]),
    isEdit () {
      return !!this.$route.params.id
    }
  },
  mounted() {
    this.handleInputsFill()
  },
  watch: {
    '$route'() {
      this.handleInputsFill()
    }
  }
}
</script>
