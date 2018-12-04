<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


  const applyTheme = () => {
    $('body').addClass('nav-md')
    $('#app').addClass("container body")
  }


  export default {
    name: 'minimart',
    mounted() {
      applyTheme()

    },
  }
</script>

<style>
  /* CSS */
</style>
