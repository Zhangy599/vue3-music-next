import { PLAY_MODE } from '../assets/js/constant'
import { shuffle } from '../assets/js/util'
// 顺序播放
export function selectPlay({ commit, state }, { list, index }) {
  commit('setPlayMode', PLAY_MODE.sqeuence)
  commit('setSequenceList', list)
  commit('setPlayState', true)
  commit('setFullSreen', true)
  commit('setPlayList', list)
  commit('setCurrentIndex', index)
}

// 随机播放
export function randomPlay({ commit }, list) {
  commit('setPlayMode', PLAY_MODE.random)
  commit('setSequenceList', list)
  commit('setPlayState', true)
  commit('setFullSreen', true)
  commit('setPlayList', shuffle(list))
  commit('setCurrentIndex', 0)
}
