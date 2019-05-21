<template>
  <div id="app">
    <h2>====================</h2>
      <div class="container">
        <Header></Header>
      </div>
        <div class="container">
        <router-view></router-view>
      </div>
 </div>
</template>

<script>
import Header from './page/Header'

export default {
    components:{
     Header
    }
  
}
</script>

<style scoped>

</style>
