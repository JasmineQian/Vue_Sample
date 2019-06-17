<template>
  <div id="learn-detail container">
    <h1 class="page-header">
      查看学习记录
      <span class="pull-right">
        <router-link to="/learn" class="btn btn-success">返回</router-link>
        <router-link v-bind:to="'/learnUpdate/' + content.id" class="btn btn-success">更新</router-link>
      </span>
    </h1>

    <br>
    <div class="well">
      <ul class="list-group">
        <li class="list-group-item">
          <p>
            学习种类:
            <Select v-model="content.tid">
              <option v-for="type in types" :value="type.id" :key="type.id">{{type.name}}</option>
            </Select>
          </p>
        </li>

        <li class="list-group-item">
          <p>学习日期: {{content.datetime}}</p>
          <p>学习内容标题: {{content.desc}}</p>
          <p>学习详细内容:</p>
          <textarea v-model="content.details"></textarea>
          <p></p>
          <p>学习点评: {{content.remark}}</p>
          <p>创建时间: {{content.creationdt}}</p>
          <p>更新时间: {{content.updatedt}}</p>
        </li>
      </ul>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnDetail",
  data() {
    return {
      content: "",
      submmited: false,
      types: [],
      id: ""
    };
  },
  methods: {
    goToLearn() {
      //通过push进行跳转
      this.$router.push("/learn");
    },

    fetchContent(id) {
      console.log(id);
      this.$http.get("api/content/show/" + id).then(response => {
        console.log(response);
        this.content = response.data;
      });
    }
  },

  created() {
    this.fetchContent(this.$route.params.id),
      this.$http.get("api/type/showall", true).then(function(response) {
        this.types = response.data;
        //console.log(this.types);
      });
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