<template>
  <div id="learn-detail container">
    <h1 class="page-header">
      查看学习记录
      <span class="pull-right">
        <router-link to="/work" class="btn btn-success">返回</router-link>
        <router-link v-bind:to="'/workUpdate/'+ work.id" class="btn btn-success">更新</router-link>
      </span>
    </h1>

    <br>
    <div class="well">
      <ul class="list-group">


        <li class="list-group-item">
          <label>学习日期: {{work.id}}</label>
          <label>学习点评: {{work.record}}</label>
          <label>创建时间: {{work.creationdt}}</label>
          <label>更新时间: {{work.updatedt}}</label>
        </li>
      </ul>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkDetail",
  data() {
    return {
      work: "",
      submmited: false,
      types: [],
      id: ""
    };
  },
  methods: {
    goToLearn() {
      //通过push进行跳转
      this.$router.push("/work");
    },

    fetchContent(id) {
      console.log(id);
      this.$http.get("api/work/show/" + id).then(response => {
        console.log(response);
        this.work = response.data;
      });
    }
  },

  created() {
    this.fetchContent(this.$route.params.id)
  }
};
</script>


<style scoped>
input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 400px;
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
</style>