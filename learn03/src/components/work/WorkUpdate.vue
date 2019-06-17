<template>
  <div id="learn-detail container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">更新学习记录</h1>
    <form v-if="!submmited" v-on:submit="updateWork">
      <div class="well">
        <div class="form-group">
          <label>ID</label>
          <input type="text" v-model="work.id" required>
        </div>

        <div class="form-group">
          <label>工作记录</label>
          <input type="text" v-model="work.record" required>
        </div>

        <button type="submit">更新</button>
        <button @click="goToWorkPage" class="btn btn-success">返回</button>
      </div>
    </form>

    <div v-if="submmited">
      <h3>已经成功更新</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkUpdate",
  data() {
    return {
      id: "",
      work: {},
      submmited: false,
      types: [],
      alert: ""
    };
  },
  methods: {
    goToWorkPage() {
      this.$router.push("/work");
    },
    fetchWork(id) {
      this.$http.get("api/work/show/" + id).then(response => {
        console.log(response);
        this.work = response.data;
      });
    },
    updateWork(e) {
      console.log("我要更新内容啦");
      if (!this.work.record) {
        console.log("请添加对应的信息");
        this.alert = "请添加对应的信息";
      } else {
        let updateWork = {
          record: this.work.record
        };
        this.$http
          .post("api/work/update/" + this.$route.params.id, updateWork)
          .then(response => {
            console.log(updateWork);
            console.log("这个时候的值是" + this.submmited);
            this.submmited = true;
            console.log(this.submmited);
            this.$router.push({
              path: "/work",
              query: { alert: "学习内容更新成功" }
            });
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },

  created() {
    this.fetchWork(this.$route.params.id)    
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