import {defaultData} from './defaultData.js'
import {CURRENT_VERSION} from './testData.js'
import {validateProfileFields} from './utils/utils.js'

/*
* Класс переводит в плоскую структуру сложные данные, вне зависимости от версий игры.
* */

export default class FlatData {
  getData = (serverData) => {
    // Object.entries(serverData).forEach(([key, value]) => console.log(key, value))
    // console.log('')
    validateProfileFields(serverData)
    
    const data = {}
    
    this.#getFlatFields(data, serverData)
    this.#getOptions(data, serverData)
    this.#getSavedLevel(data, serverData)
    this.#getTutorial(data, serverData)
    this.#getTimers(data, serverData) // всегда сброшены в default, нет смысла хранить reward время при новой версии
    
    data.version = CURRENT_VERSION
    data.savedAt = new Date().toISOString()
    
    this.#applyDefaults(data)
    return {...defaultData, ...data}
  }
  
  #getFlatFields = (data, serverData) => {
    // данные которые были изначально плоскими
    if ('version' in serverData) data.version = serverData.version
    if ('userLevel' in serverData) data.userLevel = serverData.userLevel
    if ('hints' in serverData) data.hints = serverData.hints
    if ('hasAdPass' in serverData) data.hasAdPass = serverData.hasAdPass
  }
  
  #getOptions = (data, serverData) => {
    const options = serverData.options || serverData
    if (!options) return
    
    data.option_isPlayMusic = this.#getSafeValue(options, 'isPlayMusic')
    data.option_isPlaySFX = this.#getSafeValue(options, 'isPlaySFX')
    data.option_isLight = this.#getSafeValue(options, 'isLight')
    data.option_isDebug = this.#getSafeValue(options, 'isDebug')
  }
  
  #getSavedLevel = (data, serverData) => {
    if (serverData.savedLevel && typeof serverData.savedLevel === 'object') {
      data.levelIndex = this.#getSafeValue(serverData.savedLevel, 'levelIndex')
      data.skinIndex  = this.#getSafeValue(serverData.savedLevel, 'skinIndex')
      data.partIndex  = this.#getSafeValue(serverData.savedLevel, 'partIndex')
    }
    
    // если в savedLevel не было partIndex, ищем в config (v 0.0004)
    if (!('partIndex' in data) && 'config' in serverData && 'partIndex' in serverData.config) {
      console.warn('partIndex взят из конфига')
      data.partIndex = serverData.config.partIndex
    }
  }
  
  #getTimers = (data, serverData) => {
    const timers = serverData.timers
    if (!timers) return
    if ('btnFree' in timers) data.timer_StoreBtnReward = timers.btnFree
    if ('btnHint' in timers) data.timer_NoHintsPupUpBtnReward = timers.btnHint
  }
  
  // появились в 0.0004 версии
  #getTutorial = (data, serverData) => {
    const tutorials = serverData.isTutorialCompleted || serverData.config?.isTutorialCompleted
    if (!tutorials) return
    
    if ('generator' in tutorials) data.isTutorial_generator = tutorials.generator
    if ('shadows' in tutorials) data.isTutorial_shadows = tutorials.shadows
    if ('words' in tutorials) data.isTutorial_words = tutorials.words
  }
  
  // возвращает полю undefined, если оно не найдено
  #getSafeValue = (obj, key) => {
    const isObject = (obj !== null) && (typeof obj === 'object')
    return (isObject && (key in obj)) ? obj[key] : undefined
  }
  
  // если у ключа значение undefined, ставит ему default параметр
  #applyDefaults = (target) => {
    for (const key in defaultData) {
      if (!(key in target) || target[key] === undefined) {
        target[key] = defaultData[key]
      }
    }
  }
}
