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
</template>


<script>
export default {
  props: {
    "mini": false
  },
  watch: {
    
  },
  data: () => ({
  }),
  mounted(){
    // this.$data.drawer = this.props.menuCfg
  },
  methods: {
  }
};
</script>


<style scoped>

</style>