<template>
  <div id="learn container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">
      Mum'工作记录
      <span class="pull-right">
        <router-link to="/workInsert" class="btn btn-success">增加工作记录</router-link>
      </span>
    </h1>

    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <br>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>记录时间</th>
          <th>所属ID</th>
          <th>详细描述</th>
          <th>操作按钮</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="work in filterBy(works,filterInput)" :key="work.id">
          <td>{{work.creationdt}}</td> 
          <td>{{work.id}}</td> 
          <td>{{work.record}}</td>
          <td>
            <router-link :to="'/workDetails/'+ work.id" class="btn btn-success">详情</router-link>
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
      works: [],
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
    this.fetchWorks();
  },

  methods: {
    fetchWorks() {
      this.$http.get("api/work/showall").then(function(response) {
        this.works = response.data;
      });
    },
    filterBy(works, value) {
      return works.filter(function(work) {
        return work.record.match(value);
      });
    }
  }
};
</script>


<style scoped>
#learn * {
  box-sizing: border-box;
}
</style>