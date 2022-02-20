import { useStore } from 'vuex'
import { computed } from 'vue'

export default function useCd() {
  const store = useStore()
  const playing = computed(() => store.state.playing)
  const cdCls = computed(() => playing.value ? 'playing' : '')
  return {
    cdCls
  }
}
