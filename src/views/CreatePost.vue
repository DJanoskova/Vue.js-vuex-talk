<template>
  <div>
    <input type="text" placeholder="Post title" v-model="model.title" />
    <br />
    <textarea placeholder="Post body" v-model="model.body" rows="5" />
  </div>
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
      'POSTS_FETCH'
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
    }
  },
  computed: {
    ...mapGetters([
      'posts'
    ])
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
