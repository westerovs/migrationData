

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
  userLevel: 661,
  hints: 43,
  hasAdPass: true,
  
  savedLevel: {levelIndex: 40, skinIndex: 31, partIndex: 13},
  options: {
    isPlayMusic: false,
    isPlaySFX: false,
    isLight: false,
    isDebug: false,
  },
  timers: {
    [TIMER_KEYS.BTN_STORE_FREE]: null,
    [TIMER_KEYS.BTN_HINT_REWARD_TIMER]: null,
  },
  isTutorialCompleted: {
    [LEVEL_TYPES.SHADOWS.name]: true,
    [LEVEL_TYPES.WORDS.name]: true,
    [LEVEL_TYPES.GENERATOR.name]: true,
  },
}

export {
  version3,
  version3_5,
  version4,
  version5,
  CURRENT_VERSION,
  TIMER_KEYS,
  LEVEL_TYPES,
}
