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






const CURRENT_VERSION = 0.0005
const TIMER_KEYS = {
  BTN_STORE_FREE: 'btnFree',
  BTN_HINT_REWARD_TIMER: 'btnHint',
}
const LEVEL_TYPES = {
  DEFAULT: {name: 'default', difficulty: null},
  SHADOWS: {name: 'shadows', difficulty: 'hard'},
  WORDS: {name: 'words', difficulty: 'veryHard'},
  GENERATOR: {name: 'generator', difficulty: 'extreme'},
}

const version3 = {
  version: 0.0003,
  // lvl data
  savedLevel: {levelIndex: 106, skinIndex: 2},
  userLevel: 505,
  hints: 34,
  coins: 777,
  hasAdPass: true,
  
  // options
  isPlayMusic: false,
  isPlaySFX: true,
  isDebug: false,
  
  // features
  dailyPriceData: [
    {name: 'day1 ', isUsed: false, amount: 100,},
    {name: 'day2 ', isUsed: false, amount: 200,},
    {name: 'day3 ', isUsed: false, amount: 300,},
    {name: 'day4 ', isUsed: false, amount: 400,},
    {name: 'day5 ', isUsed: false, amount: 500,},
    {name: 'day6 ', isUsed: false, amount: 600,},
    {name: 'day7 ', isUsed: false, amount: 1000,},
  ],
  
  timers: {
    [TIMER_KEYS.BTN_STORE_FREE]: null,
    [TIMER_KEYS.BTN_HINT_REWARD_TIMER]: null,
  },
}

// появился isLight
const version3_5 = {
  version: 0.0003,
  // lvl data
  savedLevel: {levelIndex: 106, skinIndex: 2},
  userLevel: 505,
  hints: 34,
  coins: 777,
  hasAdPass: true,
  
  // options
  isPlayMusic: false,
  isPlaySFX: true,
  isDebug: false,
  isLight: true,
  
  timers: {
    [TIMER_KEYS.BTN_STORE_FREE]: null,
    [TIMER_KEYS.BTN_HINT_REWARD_TIMER]: null,
  },
}

// yandex actual
const version4 = {
  version: 0.0004,
  // lvl data
  savedLevel: {levelIndex: 101, skinIndex: 4},
  userLevel: 108,
  hints: 9,
  coins: 777,
  hasAdPass: true,
  
  // options
  isDebug: true,
  isLight: false,
  isPlayMusic: false,
  isPlaySfx: true,
  
  timers: {
    btnFree: 1745820438,
    btnHint: 1744976733
  },
  
  config: {
    isTutorialCompleted: {shadows: true, words: false, generator: true},
    partIndex: 5 // partIndex может дублироваться в теле объекта.
  },

}

const version5 = {
  version: 0.0005,
  // lvl data
  userLevel: 1,
  hints: 3,
  hasAdPass: false,
  
  savedLevel: {levelIndex: 0, skinIndex: 1, partIndex: 1},
  options: {
    isPlayMusic: true,
    isPlaySFX: true,
    isLight: true,
    isDebug: false,
  },
  timers: {
    [TIMER_KEYS.BTN_STORE_FREE]: null,
    [TIMER_KEYS.BTN_HINT_REWARD_TIMER]: null,
  },
  isTutorialCompleted: {
    [LEVEL_TYPES.SHADOWS.name]: false,
    [LEVEL_TYPES.WORDS.name]: false,
    [LEVEL_TYPES.GENERATOR.name]: false,
  },
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
  version3,
  version3_5,
  version4,
  version5,
  defaultData,
  
  CURRENT_VERSION,
  TIMER_KEYS,
  LEVEL_TYPES,
}
