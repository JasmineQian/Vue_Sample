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
           
           <br>
           <br>
        </form>



    </div>
</template>

<script>
export default {
  name:"LearnDetail",
  data() {
      return {
         content:"",
          submmited: false,
          id:""
         }
  },
  methods:{
    goToLearn(){
     
     //通过push进行跳转
      this.$router.push('/learn')
    },

    fetchContent(id){
      console.log(id);
      this.$http.get("api/content/show/"+id)
      .then((response) => {
      console.log(response);
      this.content= response.data;
      })
    }
  },

  created(){
      this.fetchContent(this.$route.params.id);
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