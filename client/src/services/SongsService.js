import Api from '@/services/Api'

export default {
  getSongs () {
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
