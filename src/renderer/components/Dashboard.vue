<template>
  <v-app>
    <!-- menu topbar -->
    <v-toolbar color="deep-orange darken-4" dark absolute clipped-left>
      <v-toolbar-side-icon @click.stop="sideMenu.mini = !sideMenu.mini"></v-toolbar-side-icon>
      <v-toolbar-title v-html="'minimart'"/>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- left sidebar -->
    <side-menu v-bind="sideMenu"/>

    <!-- content -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <router-view class="page-content"></router-view>
        </v-layout>
      </v-container>
    </v-content>

    <!-- footer -->
    <the-footer/>
  </v-app>
</template>


<script>
import SideMenu from "./Layouts/the-side-menu.vue";
import TheFooter from "./Layouts/the-footer.vue";
let vue = this
export default {
  components: {
    "side-menu": SideMenu,
    "the-footer": TheFooter
  },
  data: () => ({
    sideMenu: {
      ...SideMenu.props
    }
  })

};
</script>


<style lang="scss" scoped>
.v-content {
  margin-top: 64px;
}
.v-footer {
  padding: 0 10px;
}
.page-content {
  width: 100%;
  height: 100%;
  background: transparent;
}
.-navigation-drawer {
  margin-top: 64px !important;
}
</style>