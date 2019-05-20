<template>
  <div class="news">
    <h1>{{ msg }}</h1>  
        
    <router-link to="/news/cnnews">中国新闻</router-link>
    <router-link to="/news/usanews">USA新闻</router-link>
    <router-link to="/news/bbcnews">BBC新闻</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      msg: '===============news============='
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
