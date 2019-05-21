<template>
  <div class="row" id="translateForm">
    <div class="col-md-6 col-md-offset-3">
      <form id="transForm" class="well form-inline" v-on:submit="formSubmit">
        <input class="form-control" type="text" v-model="textToTranslate" placeholder="输入需要翻译的内容">
        <select class="form-control" v-model="language">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Janpenese</option>
        </select>
        <input class="btn btn-primary" type="submit" value="翻译">
      </form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'translateForm',
  data:function(){
    return {
      textToTranslate:"",
      language:""
    }
  },
  methods: {
    formSubmit:function(e){
      // alert(this.textToTranslate);
      this.$emit("formSubmit",this.textToTranslate,this.language);
      e.preventDefault();
    }
  },
  created:function(){
    this.language = "en";
  }
}
</script>

<style>
  #transForm{
    border-radius: 10px;
    border: 1px #ccc solid;
  }
</style>
