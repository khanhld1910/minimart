<template>
  <div class="main_container">
      <main-header></main-header>
      <side-bar></side-bar>
      <app-container></app-container>
      <!-- <control-side-bar></control-side-bar>-->
      <main-footer></main-footer> 
  </div>
</template>

<script>
  import Container from './Container'
  import MainHeader from './Layouts/MainHeader'
  import SideBar from './Layouts/SideBar'
  import ControlSideBar from './Layouts/ControlSideBar'
  import MainFooter from './Layouts/MainFooter'

  export default {
    name: 'home',
    created() {
    },
    mounted() {
    },
    methods: {
    },
    components: {
      "main-header": MainHeader,
      "side-bar": SideBar,
      "app-container": Container,
      "control-side-bar": ControlSideBar,
      "main-footer": MainFooter,
    },
  }

</script>

<style lang="scss">

  .main_container{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  
</style>
