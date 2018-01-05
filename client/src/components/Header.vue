<template>
  <v-toolbar fixed class="indigo" dark>
    <v-toolbar-title class="mr-4" to="hello">
      Lyricist
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        flat 
        dark 
        to="/songs">
        Browse
      </v-btn>
    </v-toolbar-items> 

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark 
        to="/login">
        Log In
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn" 
        flat 
        dark 
        to="/register">
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn" 
        flat 
        dark 
        @click="logout"
        to="/hello">
        Log Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    async logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style scoped>
</style>
