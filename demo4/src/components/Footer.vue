<template>
  <footer>
  	<h1>{{title}}</h1>
  </footer>
</template>

<script>

export default {
  data(){
    return{
      title:"Copyright 2017 Vue.js"
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
footer{
	background: #eee;
	padding: 6px;
}

h1{
	color: lightgreen;
	text-align: center;
}
</style>
