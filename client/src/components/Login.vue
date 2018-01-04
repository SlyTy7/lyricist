<template>
  <v-layout column>
    <v-flex xs12 sm10 md6 offset-sm1 offset-md3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="indigo" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-flex xs6 offset-xs3>
            <form
              name="lyricist-form"
              autocomplete="off">
              <v-text-field 
                type="email"
                v-model="email" 
                label="E-mail Address"> 
              </v-text-field>
              <br />
              <v-text-field 
                type="password"
                v-model="password"
                label="Password"> 
              </v-text-field>
            </form>
            <div class="err" v-html="error" />
            <v-btn class="indigo" dark @click="login">Login</v-btn>
          </v-flex>
        </div>

      </div>
    </v-flex>
  </v-layout>
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
    async login () {
      try {
        await AuthenticationService.login({
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
