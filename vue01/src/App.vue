<template>
  <div id="app">
    <app-header></app-header>
    <app-users></app-users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Users from './components/Users'
export default {
  name: 'app',
  components:{
    "app-header":Header,
    "app-footer":Footer,
    "app-users":Users
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>