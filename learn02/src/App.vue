<template>
  <div id="app">
    <div class="container">
         <Header></Header>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
    <div class="container">
         <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Header,Footer
  }
}
</script>

<style scoped>
</style>
