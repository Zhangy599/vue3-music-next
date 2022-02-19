import { FAVORITE_KEY, PLAY_MODE } from '../assets/js/constant'
import { load } from '../assets/js/array-store'
const state = {
  sequenceList: [],
  playList: [],
  playing: false,
  playMode: PLAY_MODE.sequence,
  currentIndex: 0,
  fullScreen: false,
  favoriteList: load(FAVORITE_KEY)
}
export default state
