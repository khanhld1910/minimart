<template>
  <!-- left sidebar -->
  <v-navigation-drawer :mini-variant="mini" fixed permanent clipped class="grey lighten-4" app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Application</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile 
        v-for="route in routes"
        :key="route.name"
        @click="goToPage(route.path)"
      >
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
import {routes} from '../../router/menu-routes.js'

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
      this.$router.push(path)
    },
  }
};
</script>


<style scoped>
</style>