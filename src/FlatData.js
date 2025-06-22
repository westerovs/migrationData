import {defaultData} from './defaultData.js'


export default class FlatData {
  getData = (serverData) => {
    console.log('↓--------server Data--------↓')
    Object.entries(serverData).forEach(([key, value]) => console.log(key, value))
    console.log('↑----------------↑')
    console.log('')
    const data = {}
    
    // this.#getFlatFields(data, serverData)
    this.#getOptions(data, serverData)
    // this.#getSavedLevel(data, serverData)

    // this.#applyDefaults(data, defaultData)
    // return {...defaultData, ...data}
    return data
  }
  
  #getFlatFields = (data, serverData) => {
    // данные которые были изначально плоскими
    if ('version' in serverData) data.version = serverData.version
    if ('userLevel' in serverData) data.userLevel = serverData.userLevel
    if ('hints' in serverData) data.hints = serverData.hints
    if ('hasAdPass' in serverData) data.hasAdPass = serverData.hasAdPass
  }
  
  #getOptions = (data, serverData) => {
    const options = serverData || serverData.options
    if ('isPlayMusic' in options) data.option_isPlayMusic = options.isPlayMusic
    if ('isPlaySFX' in options) data.option_isPlaySFX = options.isPlaySFX
    if ('isLight' in options) data.option_isLight = options.isLight
    if ('isDebug' in options) data.option_isDebug = options.isDebug
  }
  
  #getSavedLevel = (data, serverData) => {
    if (serverData.savedLevel && typeof serverData.savedLevel === 'object') {
      data.levelIndex = this.#getSafeValue(serverData.savedLevel, 'levelIndex')
      data.skinIndex  = this.#getSafeValue(serverData.savedLevel, 'skinIndex')
      data.partIndex  = this.#getSafeValue(serverData.savedLevel, 'partIndex')
    }
    
    // если в savedLevel не было partIndex, ищем в config (v 0.0004)
    if (!('savedLevel_partIndex' in data) && 'config' in serverData && 'partIndex' in serverData.config) {
      data.savedLevel_partIndex = serverData.config.partIndex
    }
  }
  
  #getTimers = (data, serverData) => {
    const timers = serverData.timers || {}
    // if ('btnFree' in timers || TIMER_KEYS?.BTN_STORE_FREE in timers) {
    //   data.timers_BTN_STORE_FREE = timers.btnFree ?? timers[TIMER_KEYS.BTN_STORE_FREE]
    // }
    // if ('btnHint' in timers || TIMER_KEYS?.BTN_HINT_REWARD_TIMER in timers) {
    //   data.timers_BTN_HINT_REWARD_TIMER = timers.btnHint ?? timers[TIMER_KEYS.BTN_HINT_REWARD_TIMER]
    // }
  }
  
  #getTutorial = (data, serverData) => {
    const tutorials =
      serverData.isTutorialCompleted ||
      serverData.config?.isTutorialCompleted ||
      {}
    
    if ('SHADOWS' in tutorials) data.isTutorialCompleted_SHADOWS = tutorials.SHADOWS
    if ('WORDS' in tutorials) data.isTutorialCompleted_WORDS = tutorials.WORDS
    if ('GENERATOR' in tutorials) data.isTutorialCompleted_GENERATOR = tutorials.GENERATOR
  }
  
  // возвращает полю undefined, если оно не найдено
  #getSafeValue = (obj, key) => {
    const isObject = (obj !== null) && (typeof obj === 'object')
    return (isObject && (key in obj)) ? obj[key] : undefined
  }
  
  // если у ключа значение undefined, ставит ему default параметр
  #applyDefaults = (target, defaults) => {
    for (const key in defaults) {
      if (!(key in target) || target[key] === undefined) {
        target[key] = defaults[key]
      }
    }
  }
}
