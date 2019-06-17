<template>
  <div id="learn container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">学习记录管理系统</h1>

    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <br>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>记录时间</th>
          <th>分类</th>
          <th>描述</th>
          <th>操作按钮</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="content in filterBy(contents,filterInput)" :key="content.id">
          <td>{{content.datetime}}</td>
          <td>{{type2name(content.tid).name}}</td>
          <td>{{content.desc}}</td>
          <td>
            <router-link v-bind:to="'/learnDetails/' + content.id" class="btn btn-success">详情</router-link>
            <!-- query: {参数:值}}" -->

            <router-link  :to="'/learnDetails/'+ content.id"  class="btn btn-success">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  data() {
    return {
      contents: [],
      types: [],
      alert: "",
      filterInput: ""
    };
  },
  components: { Alert },
  created() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchContents(),
      this.$http.get("api/type/showall", true).then(function(response) {
        this.types = response.data;
        //console.log(this.types);
      });
  },

  methods: {
    fetchContents() {
      this.$http.get("api/content/showall").then(function(response) {
        this.contents = response.data;
      });
    },
    filterBy(contents, value) {
      return contents.filter(function(content) {
        return content.desc.match(value);
      });
    },
    type2name(id){
        return this.types.filter((v)=>{
          return v.id===id
        })[0]
    }
  }
};
</script>


<style scoped>
#learn * {
  box-sizing: border-box;
}
</style>