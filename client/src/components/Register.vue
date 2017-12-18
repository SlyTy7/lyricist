<template>
  <v-app>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2 mt-5">
          <v-toolbar flat dense class="indigo">
            <v-toolbar-title class="white--text">Register</v-toolbar-title>
          </v-toolbar>

          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-flex xs6 offset-xs3>
              <v-text-field 
                v-model="email"
                label="E-mail Address">
              </v-text-field>
              <v-text-field 
                v-model="password"
                label="Password"> 
              </v-text-field>
              <div class="err" v-html="error" />
              <v-btn class="indigo white--text" @click="register">Register</v-btn>
            </v-flex>
          </div>

        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.err {
  color: red
}
</style>
