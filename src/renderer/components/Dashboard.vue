<template>
  <v-app>
    <!-- left sidebar -->
    <side-menu :config="sideMenu" />

    <!-- menu topbar -->
    <v-toolbar color="brown" dark absolute clipped-left>
      <v-toolbar-side-icon @click.stop="sideMenu.mini = !sideMenu.mini"></v-toolbar-side-icon>
      <v-toolbar-title v-html="'minimart'" />
      <v-spacer></v-spacer>
    </v-toolbar>

    <!-- content -->
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- footer -->
    <the-footer />

  </v-app>
</template>


<script>
import SideMenu from "./Layouts/the-side-menu.vue"
import TheFooter from "./Layouts/the-footer.vue"

export default {
  components: {
    "side-menu": SideMenu,
    "the-footer": TheFooter
  },
  data: () => ({
    sideMenu: { ...SideMenu.props.config }
  }),
  mounted() {},
  methods: {
    test(e) {
      console.log(e);
    }
  }
};
</script>


<style scoped>
.v-footer {
  padding: 0 10px;
}
</style>