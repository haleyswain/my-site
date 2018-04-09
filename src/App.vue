<template>
  <div id="app">
    <nav>
      <el-row class="tac">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/home">Home</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/articles">Articles</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/projects">Projects</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/technologies">Tech</router-link></el-menu-item>
          </el-menu>
      </el-row>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
}
</script>

<style>

</style>
