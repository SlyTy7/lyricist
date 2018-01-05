<template>
    <div class="white elevation-2">
      <v-toolbar flat dense class="indigo" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-flex xs8 offset-xs2>
          <slot>
            No slot content defined.
          </slot>
        </v-flex>
      </div>
    </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
