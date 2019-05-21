<template>
  <div class="home">
      This is the Home Page
      <p></p>
      <button @click="goToMenu" class="btn btn-success"> Let's Order!</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods:{
    goToMenu(){
      //跳转到上一次的页面
      //this.$router.go(-1)

      //指定跳转的地址
      //this.$router.replace('/menu')

      //指定跳转路由的名字下
      //this.$router.replace({name:'menuLink'})

      //通过push进行跳转
      this.$router.push('/menu')
      //this.$router.push({name:'/menu'})


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
