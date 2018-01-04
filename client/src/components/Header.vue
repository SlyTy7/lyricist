<template>
  <v-toolbar fixed class="indigo" dark>
    <v-toolbar-title class="mr-4" to="#">
      Lyricist
    </v-toolbar-title>

<!--ADD BROWSE IN FUTURE-->    
    <v-toolbar-items>
      <v-btn flat dark to="hello">
        Home
      </v-btn>
    </v-toolbar-items> 

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark 
        to="login">
        Log In
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn" 
        flat 
        dark 
        to="register">
        Sign Up
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
