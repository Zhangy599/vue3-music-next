<template>
  <div class="singer" v-loading="!singerList.length">
    <index-list :data="singerList" @select="selectSinger"/>
    <router-view v-slot="{ Component }">
      <transition name="slide" appear>
        <component :is="Component" :singer="selectedSinger" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import indexList from '../components/base/index-list/index-list.vue'
import { SINGER_KEY } from '../assets/js/constant'

export default {
  name: 'singer',
  components: {
    indexList
  },
  data() {
    return {
      singerList: [],
      selectedSinger: null
    }
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer
      this.cacheSinger(singer)
      console.log(singer.mid)
      this.$router.push({ path: `/singer/${singer.mid}` })
    },
    cacheSinger(singer) {
      sessionStorage.setItem(SINGER_KEY, JSON.stringify(singer))
    }
  },
  async created() {
    const result = await getSingerList()
    this.singerList = result.singers
  }

}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
