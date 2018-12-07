<template>
  <v-app>
    <!-- left sidebar -->
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Application</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">

        <router-link to="/home" tag="div">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link to="/product" tag="div">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Product</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

      </v-list>
    </v-navigation-drawer>

    <!-- menu topbar -->
    <v-toolbar color="brown" dark absolute clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>minimart</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!-- content -->
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- footer -->
    <v-footer color="blue-grey" class="white--text" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    drawer: null
  })
};
</script>


<style scoped>
.v-footer {
  padding: 0 10px;
}
</style>