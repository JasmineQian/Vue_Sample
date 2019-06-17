<template>
  <div id="learn-insert container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">
      新增学习记录
      <span class="pull-right">
        <router-link to="/learn" class="btn btn-success">返回上一页</router-link>
      </span>
    </h1>
    <form v-if="!submmited" v-on:submit="addContent">
      <div class="well">
        <p>学习内容标题</p>
        <input type="text" placeholder="请输入学习的内容" v-model="content.desc">

        <p>学习详细内容</p>
        <textarea type="text" placeholder="请输入详细的学习的内容" v-model="content.details"></textarea>

        <p>分类情况</p>
        <select v-model="content.tid">
          <option v-for="type in types" :value="type.id" :key="type.id">{{type.name}}</option>
        </select>

        <button type="submit" class="btn btn-success">添加学习内容</button>
      </div>
    </form>

    <div v-if="submmited">
      <h3>亲的学习内容已经发布成功</h3>
    </div>

    <div id="preview">
      <h3>内容概览</h3>
      <p>内容描述： {{content.desc}}</p>
      <p>内容详细描述： {{content.details}}</p>
      <p>内容详细描述： {{content.tid}}</p>
    </div>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  data() {
    return {
      content: {
        tid: "1",
        uid: "",
        desc: "",
        details: ""
      },
      types: [],
      submmited: false,
      alert:""
    };
  },
  methods: {
    addContent(e) {
      console.log("=======adding content=======");
      if (!this.content.tid) {
        this.alert = "请添加对应的分类";
      } else if (!this.content.desc) {
        this.alert = "请添加对应的标题";
      } else if (!this.content.details) {
        this.alert = "请添加对应的详细的描述";
      } else {
        this.$http
          .post("api/content/add", this.content)
          .then(data => {
            console.log(data);
            console.log(this.submmited);
            this.submmited = true;
            console.log(this.submmited);
            this.$router.push({
              path: "/learn",
              query: { alert: "增加学习记录成功！" }
            });
          })
          .e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created() {
    this.$http.get("api/type/showall", true).then(function(response) {
      this.types = response.data;
      //console.log(this.types);
    });
  },
  components: { Alert }
};
</script>


<style scoped>
/*
#learn-insert *{
  box-sizing: border-box;
}
 
#learn-insert{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
 */
label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
  margin-top: 0;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

button {
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

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}
</style>