<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <HelloLady></HelloLady>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HelloLady from './components/HelloLady'

export default {
  name: 'App',
  components: {
    HelloWorld,HelloLady
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
