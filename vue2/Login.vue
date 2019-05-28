<template>
  <div class="bg">
    <div class="animation animation1"></div>
    <div class="animation animation2"></div>
    <div class="animation animation3"></div>
    <div class="animation animation4"></div>
    <div class="animation animation5"></div>
 <!-- <div class='title'>{{sysName | upper}}</div> -->

    <a-row type="flex" justify="space-around" align="middle" style="height:100%">
      <a-col :span="6"  style="padding:20px">
        <a-row style="text-align:center">
         <span class='title'>{{sysName | upper}}</span>
        </a-row>
        <a-row style='margin-top:20px'>
           <a-input placeholder="Email" v-model="userName" name="userName">
            <a-icon slot="prefix" type="user" />
            <a-icon v-if="userName" slot="suffix" type="close-circle" @click="userName=''"/>
           </a-input>
        </a-row>
        <a-row style='margin-top:20px'>
           <a-input placeholder="Password" type="password" v-model="userPass" name="password" v-on:keyup.enter="login">
            <a-icon slot="prefix" type="lock" />
            <a-icon v-if="userPass" slot="suffix" type="close-circle" @click="userPass=''" />
           </a-input>
        </a-row>
        <a-row style='margin-top:20px;text-align:right'>
          <a-button type="primary" block icon="login" @click="login">Login</a-button>
        </a-row>
      </a-col>
    </a-row>

  </div>

</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      sysName: 'CoE Review Platform',
      userName: null,
      userPass: null
    }
  },
  methods: {
    login () {
      this.$axios.post('api/login', {userName: this.userName, userPass: this.userPass}).then((res) => {
        if (res.data.code === '200') {
          localStorage.setItem('user', JSON.stringify(res.data.data))
          this.$router.push({ path: '/mycr' })
        } else {
          console.log(res.data.message)
          this.$message.error(res.data.message)
        }
      })
    }
  }
}
</script>
<style>
.title {
  font-size: 1.5rem;
  color: white
}
@keyframes fallingStar {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 720px, 0);
  }
}
.bg {
  position: relative;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    #03dde4 0%,
    #30afed 51%,
    #8755ff 100%
  );
}
.animation {
  height: 100%;
  position: absolute;
  top: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  transform: scaleX(0.5);
}
.animation1 {
  left: 15%;
}
.animation2 {
  left: 10%;
}
.animation3 {
  left: 30%;
}
.animation4 {
  left: 60%;
}
.animation5 {
  left: 75%;
}
.animation::before {
  position: absolute;
  background: #fff;
  content: '';
  transform: translate3d(0, -100%, 0);
}

.animation1::before {
  width: 4px;
  height: 18px;
  opacity: 0.8;
  animation: fallingStar 1.3s infinite ease-in-out;
}
.animation2::before {
  width: 4px;
  height: 18px;
  opacity: 0.8;
  animation: fallingStar 1.5s infinite ease-in-out;
}
.animation3::before {
  width: 4px;
  height: 18px;
  opacity: 0.8;
  animation: fallingStar 2s infinite ease-in-out;
}
.animation4::before {
  width: 4px;
  height: 18px;
  opacity: 0.8;
  animation: fallingStar 2.5s infinite ease-in-out;
}
.animation5::before {
  width: 4px;
  height: 18px;
  opacity: 0.8;
  animation: fallingStar 3s infinite ease-in-out;
}
div {
  display: block;
}

* {
  padding: 0;
  margin: 0;
}
</style>
