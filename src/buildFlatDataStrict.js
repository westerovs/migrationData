import {defaultData} from './testData.js'

export function buildFlatDataStrict(serverData) {
  console.log('server Data', serverData)
  const data = {}
  
  // 1. flat data - данные которые были изначально плоскими
  if ('version' in serverData) data.version = serverData.version
  if ('userLevel' in serverData) data.userLevel = serverData.userLevel
  if ('hints' in serverData) data.hints = serverData.hints
  if ('hasAdPass' in serverData) data.hasAdPass = serverData.hasAdPass
  
  // options
  const options = serverData || serverData.options
  if ('isPlayMusic' in options) data.options_isPlayMusic = options.isPlayMusic
  if ('isPlaySFX' in options) data.options_isPlaySFX = options.isPlaySFX
  if ('isLight' in options) data.options_isLight = options.isLight
  if ('isDebug' in options) data.options_isDebug = options.isDebug

  // savedLevel
  if (serverData.savedLevel && typeof serverData.savedLevel === 'object') {
    const {levelIndex, skinIndex} = serverData.savedLevel
    if (levelIndex !== null) data.savedLevel_levelIndex = levelIndex
    if (skinIndex !== null) data.savedLevel_skinIndex = skinIndex
    
    // if (partIndex !== null) data.savedLevel_partIndex = partIndex
  }

  // partIndex из config — если отсутствует в savedLevel
  // if (
  //   serverData.config?.partIndex != null &&
  //   data.savedLevel_partIndex == null
  // ) {
  //   data.savedLevel_partIndex = serverData.config.partIndex
  // }


  // 5. timers
  // const timers = serverData.timers || {}
  // if ('btnFree' in timers || TIMER_KEYS?.BTN_STORE_FREE in timers) {
  //   data.timers_BTN_STORE_FREE = timers.btnFree ?? timers[TIMER_KEYS.BTN_STORE_FREE]
  // }
  // if ('btnHint' in timers || TIMER_KEYS?.BTN_HINT_REWARD_TIMER in timers) {
  //   data.timers_BTN_HINT_REWARD_TIMER = timers.btnHint ?? timers[TIMER_KEYS.BTN_HINT_REWARD_TIMER]
  // }

  // // 6. isTutorialCompleted
  // const tutorials =
  //   serverData.isTutorialCompleted ||
  //   serverData.config?.isTutorialCompleted ||
  //   {}

  // if ('SHADOWS' in tutorials) data.isTutorialCompleted_SHADOWS = tutorials.SHADOWS
  // if ('WORDS' in tutorials) data.isTutorialCompleted_WORDS = tutorials.WORDS
  // if ('GENERATOR' in tutorials) data.isTutorialCompleted_GENERATOR = tutorials.GENERATOR

  // return {...defaultData, ...data}
  return data
}

