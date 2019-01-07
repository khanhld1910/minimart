<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click.stop="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import BcryptHelper from "../utils/bcrypt-helper";
import { userInfo } from 'os';
export default {
  data: () => ({
    username: "admin",
    password: "password"
  }),
  methods: {
    async login() {
      const username = this.$data.username;
      const password = this.$data.password;
      console.log("username", username);
      console.log("password", password);

      let query = `select * from users where username = ?`
      const values = [username]

      
      // first row only
      let user = await this.$db.getItem(query, values)

      if (!user) {
        return alert('wrong username or password!')
      }

      const checkPassword = await BcryptHelper.validString(password, user.password)
      if (!checkPassword) {
        return alert('wrong username or password!')
      }

      // localStorage.setItem('userInfo', user)
      this.$store.commit('USER_LOGIN', user)

      this.$router.push('/')
    }
  }
};
</script>
