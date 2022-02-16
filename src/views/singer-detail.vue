<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :pic="pic" :loading="loading"></music-list>
  </div>
</template>

<script>
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/song'
import MusicList from '@/components/music-list/music-list.vue'
export default {
  name: 'singer-detail',
  props: {
    singer: {
      type: Object,
      default: () => {}
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
      return this.singer && this.singer.pic
    },
    title() {
      return this.singer && this.singer.name
    }
  },
  async created() {
    const result = await getSingerDetail(this.singer)
    const songs = await processSongs(result.songs)
    this.songs = songs
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
  .singer-detail{
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
