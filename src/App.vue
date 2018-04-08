<template>
  <div class="portfolio__greeting">
    <h2>{{title}}</h2>
    <p>{{greeting()}}</p>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'nice to meet you'
    }
  },
  methods: {
    greeting: function() {
      return 'welcome to my portfolio'
    }
  }
}
</script>

<style>

</style>
