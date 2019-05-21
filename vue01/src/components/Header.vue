<template>
  <header>
  	<h1>{{title}}</h1>
  </header>
</template>

<script>

export default {
  data(){
    return{
      title:"Vue Demo"
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
header{
	background: hotpink;
	padding: 10px;
}

h1{
	color: #eee;
	text-align: center;
}
</style>
