<template>
  <div class="home">
    This is the Home Page
    <p></p>
    <button @click="goToLearnPage" class="btn btn-success">Let's Go! | 让我们进入学习页面</button>
<br>
    <div class="img-init container">
      <img src="@/assets/init.jpeg">
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    goToLearnPage() {
      //跳转到上一次的页面
      //this.$router.go(-1)

      //指定跳转的地址
      //this.$router.replace('/learn')

      //指定跳转路由的名字下
      //this.$router.replace({name:'menuLink'})

      //通过push进行跳转
      this.$router.push("/learn");
      //this.$router.push({name:'/learn'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-init {
  max-width: 80% 100px;
  border: 0px solid;
  padding: 0px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
</style>

