<template>
  <div class="page1">
    <h1>{{ msg }}</h1>    
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: '我这段文字写在Page1中的VUE'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
