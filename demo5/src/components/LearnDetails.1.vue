<template>
    <div id ="learn-detail">
        <h1>查看详细的学习记录</h1>
        <table class="table  table-bordered table-hover">
          <form>
    <tbody>
            <tr class="table danger">
            <td>序号</td>
            <td>分类</td>
            <td>用户</td>
            <td>时间</td>
            <td>描述</td>            
        </tr>


        <tr>
         <td> {{content.id}}</td>
         <td> {{content.tid}}</td>
         <td> {{content.uid}}</td>
         <td> {{content.datetime}}</td>
         <td v-if="!submmited">  <button v-on:click.prevent="post">更新</button></td>
         </tr>


        <tr>
            <td colspan="5">描述</td>
        </tr>
        
        <tr>
         <td colspan="5"> {{content.desc}}</td>
        </tr>
        <tr>
            <td colspan="5">详细描述</td>
        </tr>
        
        <tr>
         <td colspan="5">
           <textarea v-model="content.details">
           </textarea>
           </td>
        </tr>

        </tbody>
        </form>
        </table>
        
    </div>
</template>

<script>
export default {
  data() {
      return {
         content:{},
          submmited: false
         }
  },
  methods:{
    post:function(){
        this.$http.post('http://localhost:8085/content/update', this.content)
        .then((data) =>{
          console.log(data);
          console.log("这个时候的值是"+this.submmited);
          this.submmited= true;
          console.log(this.submmited);
      }
      );
      },
  created(){
      this.$http.get('http://localhost:8085/content/show/1', true)
      .then(function(details){
          console.log(details);
          this.content=details.data;
          console.log(this.content);
      })
  }
  }
  
}

</script>


<style scoped>

 
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
 
textarea{
  height: 400px;
}

</style>