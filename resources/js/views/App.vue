<template>
  <div>
    <div class="card my-4 p-3 mx-auto" style="max-width: 800px;" v-for="post in posts" :key="post.id">
      <div class="card-title my-2">
        <h3>{{ post.id }} - {{ post.title }}</h3>
      </div>
      <div class="card-image text-center my-3">
        <img :src="post.post_image" class="w-50" alt="">
      </div>
      <div class="card-subtitle my-2">
        <h6>{{ post.user.name }}</h6>
      </div>
      <div class="card-text my-2">
        <p>{{ post.post_content }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',
  data: function(){
    return {
      posts: [],
    }
  },
  methods: {
    getPosts() {
      axios.get('/api/posts', {

      }).then((response) => {
        // console.log(response.data);
        this.posts = response.data.data;
        console.log(this.posts);
      }).catch((error) => {
        console.warn(error);
      })
    }
  },
  created(){
    this.getPosts();
  }
}
</script>

<style>

</style>