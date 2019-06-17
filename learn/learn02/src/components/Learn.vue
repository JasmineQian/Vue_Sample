<template>
    <div id ="learn">
        <h1>学习记录</h1>
        <table class="table  table-bordered table-hover">
    <tbody >
            <tr class="table danger">
            <td>序号</td>
            <td>分类</td>
            <td>用户</td>
            <td>记录时间</td>
            <td>描述</td>
            <td>操作按钮</td>
            
        </tr>
        <tr v-for = "content in contents"  :key="content.id">
           

         <td> {{content.id}}</td>
         <td> {{content.tid}}</td>
         <td> {{content.uid}}</td>
         <td> {{content.datetime}}</td>
         <td> {{content.desc}}</td>
         <td>
             <router-link :to="'/learnDetails/' + content.id" class="btn btn-success">查看</router-link>
             <router-link :to="'/learnUpdate/' + content.id" class="btn btn-success">更新</router-link>
          </td>
         </tr>

        </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data() {
      return {
         contents:[]}
  },
  created(){
      this.$http.get('api/content/showall', true)
      .then(function(response){
          this.contents=response.data;
      })
  },
      
    methods:{
      get:function(){
        this.$http.post('api/content/show/', this.content)
        .then((data) =>{
          console.log(data);
          console.log("这个时候的值是"+this.submmited);
          this.submmited= true;
          console.log(this.submmited);
      });
  },
  /*goToLearnDetails(){
      this.$router.replace(
          {
               name: 'learnDetails',
               params:{to: '7'}})
    },
      goToLearnUpdate(){
      //跳转到上一次的页面
      //this.$router.go(-1)

      //指定跳转的地址
      //this.$router.replace('/menu')

      //指定跳转路由的名字下
      //this.$router.replace({name:'menuLink'})

      //通过push进行跳转
      this.$router.push('/learnUpdate')
      //this.$router.push({name:'/menu'})


    }*/
  }
  }



</script>


<style scoped>
#learn *{
  box-sizing: border-box;
}


</style>