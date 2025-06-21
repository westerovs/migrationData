import {defaultData} from './defaultData.js'

const getSafeValue = (obj, key) => {
  const isObject = (obj !== null) && (typeof obj === 'object')
  return (isObject && (key in obj)) ? obj[key] : undefined
}

const applyDefaults = (target, defaults) => {
  for (const key in defaults) {
    if (!(key in target) || target[key] === undefined) {
      target[key] = defaults[key]
    }
  }
}

export function buildFlatDataStrict(serverData) {
  console.log('server Data', serverData)
  const data = {}
  
  // ✅ flat data - данные которые были изначально плоскими
  if ('version' in serverData) data.version = serverData.version
  if ('userLevel' in serverData) data.userLevel = serverData.userLevel
  if ('hints' in serverData) data.hints = serverData.hints
  if ('hasAdPass' in serverData) data.hasAdPass = serverData.hasAdPass
  
  
  // ✅ options
  const options = serverData || serverData.options
  if ('isPlayMusic' in options) data.options_isPlayMusic = options.isPlayMusic
  if ('isPlaySFX' in options) data.options_isPlaySFX = options.isPlaySFX
  if ('isLight' in options) data.options_isLight = options.isLight
  if ('isDebug' in options) data.options_isDebug = options.isDebug

  
  // ✅savedLevel
  if (serverData.savedLevel && typeof serverData.savedLevel === 'object') {
    data.savedLevel_levelIndex = getSafeValue(serverData.savedLevel, 'levelIndex')
    data.savedLevel_skinIndex  = getSafeValue(serverData.savedLevel, 'skinIndex')
    data.savedLevel_partIndex  = getSafeValue(serverData.savedLevel, 'partIndex')
  }
  
  // если в savedLevel не было partIndex, ищем в config
  if (!('savedLevel_partIndex' in data) && 'config' in serverData && 'partIndex' in serverData.config) {
    data.savedLevel_partIndex = serverData.config.partIndex
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
  
  // если у ключа значение undefined, ставит ему default параметр
  applyDefaults(data, defaultData)
  // return {...defaultData, ...data}
  return data
}

