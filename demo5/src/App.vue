<template>
  <div id="app">
    <div class="container">
         <Header></Header>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style scoped>
</style>
