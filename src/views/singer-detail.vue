<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :pic="pic" :loading="loading"></music-list>
  </div>
</template>

<script>
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'
import MusicList from '@/components/music-list/music-list.vue'
import { SINGER_KEY } from '../assets/js/constant'

export default {
  name: 'singer-detail',
  props: {
    singer: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      songs: [],
      loading: true
    }
  },
  components: {
    MusicList
  },
  computed: {
    pic() {
      const singer = this.computedSinger
      return singer && singer.pic
    },
    title() {
      const singer = this.computedSinger
      return singer && singer.name
    },
    computedSinger() {
      let ret = null
      const singer = this.singer
      if (singer) {
        ret = singer
      } else {
        const cachedSinger = JSON.parse(sessionStorage.getItem(SINGER_KEY))
        console.log(cachedSinger.mid === this.$route.params.id)
        if (cachedSinger && cachedSinger.mid === this.$route.params.id) {
          ret = cachedSinger
        }
      }
      return ret
    }
  },
  async created() {
    if (!this.computedSinger) {
      const path = this.$route.matched[0].path
      this.$router.push({
        path
      })
    }
    const result = await getSingerDetail(this.computedSinger)
    const songs = await processSongs(result.songs)
    this.songs = songs
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
