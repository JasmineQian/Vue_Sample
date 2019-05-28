<template>
    <div id ="learn-detail">
        <h1>更新学习记录</h1>
        <form v-if="!submmited">
          
            <p>学习的ID</p>
            <input type="text" v-model="content.id" required />

            <p>学习种类itd</p>
            <input type="text" v-model="content.tid" required />

            <p>学习UID</p>
            <input type="text" v-model="content.uid" required />

            <p>学习啥时间 </p>
            <input type="text" v-model="content.datetime" required />

            <p>学习内容标题</p>
            <input type="text" v-model="content.desc" required />

            <p>学习详细内容</p>
            <textarea type="text" v-model="content.details" required></textarea>

            <button v-on:click.prevent="post">更新</button>
        </form>


        <div v-if="submmited" >
            <h3>已经成功更新</h3>
        </div>

    </div>
</template>

<script>
export default {
  data() {
      return {
         id:3,
         content:{
           id:""
         },
         tids:[1,2,3,4,5],
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
      });
  }
  },
  created(){
      this.$http.get('http://localhost:8085/content/show/1', true)
      .then(function(response){
          console.log(response);
          this.submmited= false;
          this.content=response.data;
          console.log(this.content);
      })
  }


}

</script>


<style scoped>
label{
  display: block;
  margin: 20px 0 10px;
}
 
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
 
textarea{
  height: 600px;
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

 
h3{
  margin-top: 10px;
}
</style>