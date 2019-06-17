<template>
  <div id="learn-insert container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">
      新增工作记录
      <span class="pull-right">
        <router-link to="/work" class="btn btn-success">返回上一页</router-link>
      </span>
    </h1>
    <form v-if="!submmited" v-on:submit="addWork">
      <div class="well">
        <p>工作内容记录</p>
        <input type="text" placeholder="请输入需要记录的内容" v-model="work.record">
        <button type="submit" class="btn btn-success">添加工作内容</button>
      </div>
    </form>

    <div v-if="submmited">
      <h3>亲的学习内容已经发布成功</h3>
    </div>

    <div id="preview">
      <h3>内容概览</h3>
      <p>内容描述： {{work.record}}</p>
    </div>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  data() {
    return {
      work: {
        uid: "1",
        record: ""
      },
      submmited: false,
      alert:""
    };
  },
  methods: {
    addWork(e) {
      console.log("=======adding content=======");
      if (!this.work.record) {
        this.alert = "请添加对应的记录";
      }else {
        this.$http
          .post("api/work/add", this.work)
          .then(data => {
            console.log(data);
            console.log(this.submmited);
            this.submmited = true;
            console.log(this.submmited);
            this.$router.push({
              path: "/work",
              query: { alert: "增加工作记录成功！" }
            });
          })
          .e.preventDefault();
      }
      e.preventDefault();
    }
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