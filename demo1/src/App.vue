<template>
  <div id="app">
    <Header></Header>
    <hr>
    <img src="./assets/logo.png">
    <HelloWorld></HelloWorld>
    <HelloLady></HelloLady>
    <hr>
    <footer></footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import footer from './components/footer'
import HelloLady from './components/test/HelloLady'

export default {
  name: 'App',
  components: {
    HelloWorld,Header,footer,HelloLady
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
