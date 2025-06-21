import {CURRENT_VERSION} from './testData.js'

const STORAGE_KEYS = {
  user_level: 'user_level',
  hints: 'hints',
  has_ad_pass: 'has_ad_pass',
  
  saved_level: 'saved_level',
  
  option_music: 'option_music',
  option_sfx: 'option_sfx',
  option_light: 'option_light',
  option_debug: 'option_debug',
  
  timer_store_free: 'timer_store_free',
  timer_hint_reward: 'timer_hint_reward',
  
  tutorial_completed_shadows: 'tutorial_completed_shadows',
  tutorial_completed_words: 'tutorial_completed_words',
  tutorial_completed_generator: 'tutorial_completed_generator'
}

const pool = {
  [STORAGE_KEYS.user_level]: 1,
  [STORAGE_KEYS.hints]: 3,
  [STORAGE_KEYS.has_ad_pass]: false,
  
  [STORAGE_KEYS.saved_level]: {levelIndex: 0, skinIndex: 1, partIndex: 1},
  
  [STORAGE_KEYS.option_music]: true,
  [STORAGE_KEYS.option_sfx]: true,
  [STORAGE_KEYS.option_light]: true,
  [STORAGE_KEYS.option_debug]: false,
  
  [STORAGE_KEYS.timer_store_free]: null,
  [STORAGE_KEYS.timer_hint_reward]: null,
  
  [STORAGE_KEYS.tutorial_completed_shadows]: false,
  [STORAGE_KEYS.tutorial_completed_words]: false,
  [STORAGE_KEYS.tutorial_completed_generator]: false
}

const defaultData = {
  version: CURRENT_VERSION,
  userLevel: 1,
  hints: 3,
  hasAdPass: false,
  
  savedLevel_levelIndex: 0,
  savedLevel_skinIndex: 1,
  savedLevel_partIndex: 1,
  
  options_isPlayMusic: true,
  options_isPlaySFX: true,
  options_isLight: true,
  options_isDebug: false,
  
  timers_BTN_STORE_FREE: null,
  timers_BTN_HINT_REWARD_TIMER: null,
  
  isTutorialCompleted_SHADOWS: false,
  isTutorialCompleted_WORDS: false,
  isTutorialCompleted_GENERATOR: false
}

export {
  defaultData
}
