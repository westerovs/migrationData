const CURRENT_VERSION = 0.006
// const TIMER_KEYS = {
//   BTN_STORE_FREE: 'btnFree',
//   BTN_HINT_REWARD_TIMER: 'btnHint',
// }

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
    btnFree: null,
    btnHint: null,
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
    btnFree: null,
    btnHint: null,
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
    btnHint: 9944976733
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
    btnFree: null,
    btnHint: null,
  },
  isTutorialCompleted: {
    [LEVEL_TYPES.SHADOWS.name]: true,
    [LEVEL_TYPES.WORDS.name]: true,
    [LEVEL_TYPES.GENERATOR.name]: true,
  },
}

const version6 = {
  version: 0.005,
  // flat
  userLevel: 20,
  hints: 8,
  hasAdPass: true,
  // lvl data
  levelIndex: 13,
  skinIndex: 1,
  partIndex: 1,
  // options
  option_isPlayMusic: false,
  option_isPlaySFX: false,
  option_isLight: false,
  option_isDebug: false,
  // timers
  timer_StoreBtnReward: null,
  timer_NoHintsPupUpBtnReward: null,
  // learning
  isTutorial_generator: false,
  isTutorial_shadows: true,
  isTutorial_words: true,
  // new
  savedAt: '2025-06-22T14:31:03.255Z',
  playerId: null,
}


export {
  version3,
  version3_5,
  version4,
  version5,
  version6,
  CURRENT_VERSION,
}
