<template>
  <div id="learn-detail container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">更新学习记录</h1>
    <form v-if="!submmited" v-on:submit="updateContent">
      <div class="well">
        <div class="form-group">
          <label>学习的ID</label>
          <input type="text" v-model="content.id" required>
        </div>

        <div class="form-group">
          <label>学习分类</label>
          <select v-model="content.tid">
            <option v-for="type in types" :value="type.id" :key="type.id">{{type.name}}</option>
          </select>
        </div>

        <div class="form-group">
          <label>学习啥时间</label>
          <input type="text" v-model="content.datetime" required>
        </div>

        <div class="form-group">
          <label>学习内容标题</label>
          <input type="text" v-model="content.desc" required>
        </div>

        <div class="form-group">
          <label>学习详细内容</label>
          <textarea type="text" v-model="content.details" required></textarea>
        </div>

        <div class="form-group">
          <label>请对学习进行点评</label>
          <input type="text" v-model="content.remark" required>
        </div>

        <button type="submit">更新</button>
        <button @click="goToLearnPage" class="btn btn-success">返回</button>
      </div>
    </form>

    <div v-if="submmited">
      <h3>已经成功更新</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnUpdate",
  data() {
    return {
      id: "",
      content: {},
      tids: [1, 2, 3, 4, 5],
      submmited: false,
      types: [],
      alert: ""
    };
  },
  methods: {
    goToLearnPage() {
      this.$router.push("/learn");
    },
    fetchContent(id) {
      this.$http.get("api/content/show/" + id).then(response => {
        console.log(response);
        this.content = response.data;
      });
    },
    updateContent(e) {
      console.log("我要更新内容啦");
      if (!this.content.desc || !this.content.details) {
        console.log("请添加对应的信息");
        this.alert = "请添加对应的信息";
      } else {
        let updateContent = {
          tid: this.content.tid,
          desc: this.content.desc,
          details: this.content.details,
          remark: this.content.remark
        };
        this.$http
          .post("api/content/update/" + this.$route.params.id, updateContent)
          .then(response => {
            console.log(updateContent);
            console.log("这个时候的值是" + this.submmited);
            this.submmited = true;
            console.log(this.submmited);
            this.$router.push({
              path: "/learn",
              query: { alert: "学习内容更新成功" }
            });
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },

  created() {
    this.fetchContent(this.$route.params.id);
    this.$http.get("api/type/showall", true).then(function(response) {
      this.types = response.data;
      //console.log(this.types);
    });
  }
};
</script>


<style scoped>
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

button {
  display: block;
  margin: 10px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}

h3 {
  margin-top: 10px;
}
</style>