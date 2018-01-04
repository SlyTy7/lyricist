<template>
  <v-layout row wrap>
    <v-flex xs12 sm10 md4 offset-sm1 offset-md1>
      <panel title="Song Metadata" class="mt-5">
        <v-text-field
          label="Title"
          v-model="song.title">
        </v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist">
        </v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre">
        </v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album">
        </v-text-field>

        <v-text-field
          label="Album Image URL"
          v-model="song.albumImageUrl">
        </v-text-field>

        <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId">
        </v-text-field>
      </panel>
    </v-flex>

    <v-flex xs12 sm10 md5 offset-sm1 offset-md1>
      <panel title="Song Lyrics" class="mt-5">
        <v-text-field
          label="Lyrics"
          v-model="song.lyrics"
          multi-line>
        </v-text-field>
      </panel>

      <v-btn class="indigo" dark @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>

</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
