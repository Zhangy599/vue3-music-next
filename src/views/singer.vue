<template>
  <div class="singer" v-loading="!singerList.length">
    <index-list :data="singerList" @select="selectSinger" />
    <router-view :singer="selectedSinger"></router-view>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import indexList from '../components/base/index-list/index-list.vue'
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
      this.$router.push({ path: `/singer/${singer.mid}` })
    }
  },
  async created() {
    const result = await getSingerList()
    this.singerList = result.singers
  }

}
</script>

<style lang="scss" scoped>
  .singer{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }
</style>
