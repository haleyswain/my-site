<template>
  <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/articles">Articles</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/technologies">Technologies</router-link>
      </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data () {
  }
}
</script>

<style>

</style>
