<template>
  <div>
    <div class="card p-4 my-4" v-for="post in posts" :key="post.id">
      <div class="card-title my-2">
        <h3>{{ post.id }} - {{ post.title }}</h3>
      </div>
      <div class="card-subtitle my-2">
        <h6>autore</h6>
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