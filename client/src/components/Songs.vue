<template>
  <v-layout column>
    <v-flex xs12 sm10 md6 offset-sm1 offset-md3>
      <panel title="Songs">
        <div 
          v-for="song in songs" 
          :key="song.title">
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // do a request for all songs
    this.songs = await SongsService.getSongs()
  }
}
</script>

<style scoped>
</style>
