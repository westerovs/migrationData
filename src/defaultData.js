import {CURRENT_VERSION} from './testData.js'

const STORAGE_KEYS = {
  userLevel: 'userLevel',
  hints: 'hints',
  hasAdPass: 'hasAdPass',
  
  levelIndex: 'levelIndex',
  skinIndex: 'skinIndex',
  partIndex: 'partIndex',
  
  option_isPlayMusic: 'option_isPlayMusic',
  option_isPlaySFX: 'option_isPlaySFX',
  option_isLight: 'option_isLight',
  option_isDebug: 'option_isDebug',
  
  timer_btnStoreFree: 'timer_store_free',
  timer_hint_reward: 'timer_hint_reward',
  
  tutorial_completed_shadows: 'tutorial_completed_shadows',
  tutorial_completed_words: 'tutorial_completed_words',
  tutorial_completed_generator: 'tutorial_completed_generator'
}

const defaultData = {
  [STORAGE_KEYS.userLevel]: 1,
  [STORAGE_KEYS.hints]: 3,
  [STORAGE_KEYS.hasAdPass]: false,
  
  [STORAGE_KEYS.levelIndex]: 0,
  [STORAGE_KEYS.skinIndex]: 1,
  [STORAGE_KEYS.partIndex]: 1,
  
  [STORAGE_KEYS.option_isPlayMusic]: true,
  [STORAGE_KEYS.option_isPlaySFX]: true,
  [STORAGE_KEYS.option_isLight]: true,
  [STORAGE_KEYS.option_isDebug]: false,
  
  // [STORAGE_KEYS.timer_store_free]: null,
  // [STORAGE_KEYS.timer_hint_reward]: null,
  //
  // [STORAGE_KEYS.tutorial_completed_shadows]: false,
  // [STORAGE_KEYS.tutorial_completed_words]: false,
  // [STORAGE_KEYS.tutorial_completed_generator]: false
}

export {
  defaultData
}
