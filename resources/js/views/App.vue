<template>
  <div>
    <h1 class="text-center my-4">Recent Posts:</h1>

    <Main v-for="post in posts" :key="post.id" 
      :post="post" 
    />
  </div>
</template>

<script>

import axios from 'axios';
import Main from '../components/Main.vue';

export default {
  name: "App",
  components: { Main },
  data: function () {

    return {
      posts: [],
    };

  },

  methods: {

    getPosts() {
      axios.get("/api/posts", {}).then((response) => {
        // console.log(response.data);
        this.posts = response.data.data;
        console.log(this.posts);
      }).catch((error) => {
        console.warn(error);
      });
    },

    getTags() {
      axios.get("/api/tags", {}).then((response) => {
        // console.log(response.data);
        this.tags = response.data.data;
        console.log(this.tags);
      }).catch((error) => {
        console.warn(error);
      });
    }

  },

  created() {
    this.getPosts();
    this.getTags();
  },
}
</script>

<style>

</style>