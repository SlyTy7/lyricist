<template>
  <v-layout column>
    <v-flex xs12 sm10 md6 offset-sm1 offset-md3>
      <panel title="Register">
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
            label="Password"
            autocomplete="new-password"> 
          </v-text-field>
        </form>
        <div class="err" v-html="error" />
        <v-btn class="indigo" dark @click="register">Register</v-btn>
      </panel> 
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.err {
  color: red
}
</style>
