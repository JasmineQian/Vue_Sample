<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>要么全身而退要么头疼睡不着</h2>
    <ul>
     <li>
       <a
         href="https://home.cnblogs.com/u/qianjinyan/"
         target="_blank"
       >
         点击到达Jasmine的博客园
       </a>
     </li>
     <li>
       <a
         href="https://github.com/JasmineQian"
         target="_blank"
       >
         点击到达Jasmine的github网站
       </a>
     </li>
 
     <br>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎入坑Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
