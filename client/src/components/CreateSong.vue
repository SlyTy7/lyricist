<template>
  <v-layout row wrap>
    <v-flex xs12 sm10 md4 offset-sm1 offset-md1>
      <panel title="Song Metadata" class="mt-5">
        <v-text-field
          label="Title"
          v-model="song.title"
          required
          :rules="[required]">
        </v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist"
          required
          :rules="[required]">
        </v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre"
          required
          :rules="[required]">
        </v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album"
          required
          :rules="[required]">
        </v-text-field>

        <v-text-field
          label="Album Image URL"
          v-model="song.albumImageUrl"
          required
          :rules="[required]">
        </v-text-field>

        <v-text-field
          label="YouTube ID"
          v-model="song.youtubeId"
          required
          :rules="[required]">
        </v-text-field>
      </panel>
    </v-flex>

    <v-flex xs12 sm10 md5 offset-sm1 offset-md1>
      <panel title="Song Lyrics" class="mt-5">
        <v-text-field
          label="Lyrics"
          v-model="song.lyrics"
          multi-line
          required
          :rules="[required]">
        </v-text-field>
      </panel>

      <!-- <div class="error" v-if="error">
        {{error}}  
      </div> -->

      <v-btn 
        class="indigo mt-3" 
        dark 
        @click="create">
        Create Song
      </v-btn>

      <v-alert
        class="mt-2"
        :value="error"
        icon="warning"
        transition="scale-transition"
        error>
        {{error}}
      </v-alert>﻿

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
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areFieldsFilledIn) {
        this.error = 'Please fill in all the requirements'
        return
      }

      try {
        await SongsService.post(this.song)
        // navigate back to songs panel after submitting new song
        this.$router.push({
          name: 'songs'
        })
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
