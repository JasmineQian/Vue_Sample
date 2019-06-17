<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">511easy | Daily管理系统</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/home">主页</router-link>
            </li>
            <li>
              <router-link to="/learn" class="nav-link">学习记录</router-link>
            </li>
            <li>
              <router-link to="/admin" class="nav-link">管理</router-link>
            </li>
            <li>
              <router-link to="/about" class="nav-link">关于我们</router-link>
            </li>
            <li>
              <router-link to="/hive" class="nav-link">Hive</router-link>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/login" class="nav-link">登录</router-link>
            </li>
            <li>
              <router-link to="/register" class="nav-link">注册</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>