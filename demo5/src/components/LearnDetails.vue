<template>
    <div id ="learn-detail">
       <h1>
         查看详细的学习记录
         <button @click="goToLearn" class="btn btn-success">返回上一页</button>
         </h1>
        
        <form v-if="!submmited">
          
            <p>学习的ID</p>
            <input type="text" v-model="content.id" required />

            <p>学习种类itd</p>
            <input type="text" v-model="content.tid" required />

            <p>学习UID</p>
            <input type="text" v-model="content.uid" onfocus=this.blur() />

            <p>学习啥时间 </p>
            <input type="text" v-model="content.datetime" onfocus=this.blur() />

            <p>学习内容标题</p>
            <input type="text" v-model="content.desc" required />

            <p>学习详细内容</p>
            <textarea type="text" v-model="content.details" required></textarea>
           
        </form>



    </div>
</template>

<script>
export default {
  data() {
      return {
         content:{
           id:"",
           tid:"",
           uid:"",
           desc:"",
           details:""
         },
          submmited: false,
          params:"7"
         }
  },
  methods:{
    goToLearn(){
      //跳转到上一次的页面
      //this.$router.go(-1)

      //指定跳转的地址
      //this.$router.replace('/menu')

      //指定跳转路由的名字下
      //this.$router.replace({name:'menuLink'})

      //通过push进行跳转
      this.$router.push('/learn')
      //this.$router.push({name:'/menu'})


    }
  },

  created(){
      this.$http.get('http://localhost:8085/content/show/:to', params)
      .then(function(details){
          console.log(details);
          this.content=details.data;
          console.log(this.content);
      })
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


button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
} 

</style>