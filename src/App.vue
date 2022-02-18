<template>
  <m-header />
  <m-tab />
  <router-view></router-view>
  <MPlayer />
</template>

<script>
import Header from '@/components/header/header.vue'
import Tab from '@/components/tab/tab.vue'
import Player from './components/player/player'
export default {
  components: {
    MHeader: Header,
    MTab: Tab,
    MPlayer: Player
  }
}
</script>
