<template>
  <a-layout style="height: 100%">
    <a-layout-header class="header">
      <a-row>
        <a-col :span="3"
               :xs="12"
               :sm="8"
               :lg="6"
               style="line-height:60px;text-align:left;color:white; padding-left:20px">
          <img src="@/assets/logo.png"
               alt=""
               style="height:40px"
               spin
               class='logo' />
          <span style="padding-left:20px">999</span>
        </a-col>
      </a-row>
    </a-layout-header>
  </a-layout>
 </template>
           

<style>
body,
html {
  height: 100% !important;
}
.ant-layout-content {
  height: 100% !important;
}
.container {
  height: 100% !important;
}

#components-layout-demo-top-side {
  min-height: 100%;
  height: 100%;
}
.header {
  box-shadow: 0 2px 8px #f0f1f2;
}

.ant-layout-header {
  padding: 0;
}
.drawer-handle {
  position: absolute;
  top: 72px;
  width: 41px;
  height: 40px;
  cursor: pointer;
  z-index: 0;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  right: -40px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  border-radius: 0 4px 4px 0;
}
.ant-drawer-body {
  padding: 0px !important;
}
.main-content {
  height: 100%;
  padding: 10px;
}
.draw-header {
  padding: 16px 24px;
  border-radius: 4px 4px 0 0;
  background: #fff;
  color: rgba(0, 0, 0, 0.65);
  border-bottom: 1px solid #e8e8e8;
  text-align: center;
}
.logo {
  animation: haha1 20s linear infinite;
}
.welcome {
  color: whitesmoke;
  float: right;
}
.current {
  border: none
}
@keyframes haha1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>

          