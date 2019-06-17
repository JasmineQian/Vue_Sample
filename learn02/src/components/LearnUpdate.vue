<template>
  <div id="learn-detail container">
    <h1>更新学习记录</h1>
    <form v-if="!submmited" v-on:submit="updateContent">
      <p>学习的ID</p>
      <input type="text" v-model="content.id" required>

      <p>学习种类itd</p>
      <select v-model="content.tid">
        <option v-for="type in types" :value="type.id" :key="type.id">{{type.name}}</option>
      </select>

      <p>学习UID</p>
      <input type="text" v-model="content.uid" required>

      <p>学习啥时间</p>
      <input type="text" v-model="content.datetime" required>

      <p>学习内容标题</p>
      <input type="text" v-model="content.desc" required>

      <p>学习详细内容</p>
      <textarea type="text" v-model="content.details" required></textarea>

      <button type="submit">更新</button>
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
          uid: this.content.uid,
          desc: this.content.desc,
          details: this.content.details
        };
        this.$http
          .post("api/content/update/" + this.$route.params.id, updateContent)
          .then(response => {
            console.log(response);
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
  height: 600px;
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

h3 {
  margin-top: 10px;
}
</style>