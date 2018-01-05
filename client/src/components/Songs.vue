<template>
  <v-layout column>
    <v-flex xs12 sm10 md6 offset-sm1 offset-md3>
      <panel title="Songs" class="mt-5">
        
        <v-btn
          slot="action"
          class="indigo accent-1"
          to="songs/create"
          absolute
          dark
          small
          right
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        
        <div 
          v-for="song in songs" 
          class="song" 
          :key="song.id">

          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>

              <div class="song-artist">
                {{song.artist}}
              </div>

              <div class="song-genre">
                {{song.genre}}
              </div>
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl">
            </v-flex>
          </v-layout>

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
    this.songs = (await SongsService.getSongs()).data
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 250px; 
    overflow: hidden;
  }

  .song-title {
    font-size: 26px;
  }

  .song-artist {
    font-size: 22px;
  }

  .song-genre {
    font-size: 18px;
  }

  .album-image {
    width: 75%;
    margin: 0 auto
  }

</style>
