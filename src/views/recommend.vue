<template>
  <div class="recommend">
    <scroll class="recommend-content">
      <div>
        <!-- 推荐轮播图 -->
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider v-if="sliders.length" :sliders="sliders" />
          </div>
        </div>
        <!-- 推荐列表 -->
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="item in albums" :key="item.id" class="item">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.pic" />
              </div>
              <div class="text">
                <h2 class="name">{{ item.username }}</h2>
                <p class="title">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getRecommend } from '@/service/recommend'
import Slider from '@/components/base/slider/slider.vue'
import Scroll from '@/components/scroll/scroll.vue'
export default {
  name: 'recommend',
  components: {
    Slider,
    Scroll
  },
  setup() {
    const sliders = ref([])
    const albums = ref([])
    onMounted(async () => {
      const result = await getRecommend()
      console.log(result)
      sliders.value = result.sliders
      albums.value = result.albums
      console.log(albums.value)
    })
    return {
      sliders,
      albums
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
    }
    .slider-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;
      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $color-text;
      }
      .name {
        margin-bottom: 10px;
        color: $color-text;
      }
      .title {
        color: $color-text-d;
      }
    }
  }
}
</style>
