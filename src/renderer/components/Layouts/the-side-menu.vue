<template>
  <!-- left sidebar -->
  <v-navigation-drawer :mini-variant="mini" fixed permanent clipped class="grey lighten-4" app style="margin-top: 64px;">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="route in routes" :key="route.name" @click="goToPage(route.path)">
        <v-list-tile-action>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ route.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
import { routes } from "../../router/menu-routes.js";

export default {
  props: {
    mini: false
  },
  watch: {},
  data: () => ({
    routes
  }),
  methods: {
    goToPage(path) {
      this.$router.push(path);
    }
  }
};
</script>


<style scoped>
</style>