<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Header/>
    <Users></Users>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Footer from './components/Footer'
import Users from './components/Users'

export default {
  name: 'App',
  components: {
    HelloWorld,Header,Users,Footer
  },
   data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
