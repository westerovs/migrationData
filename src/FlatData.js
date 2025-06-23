import {defaultData} from './defaultData.js'
import {CURRENT_VERSION} from './testData.js'
import {validateProfileFields} from './utils/utils.js'

/*
* Класс переводит в плоскую структуру сложные данные, вне зависимости от версий игры.
* */

export default class FlatData {
  getData = (serverData) => {
    console.log('----------- serverData -------------')
    Object.entries(serverData).forEach(([key, value]) => console.log(key, value))
    console.log('')
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
    // return data
  }
  
  #getFlatFields = (data, serverData) => {
    // данные которые были изначально плоскими
    if ('version' in serverData) data.version = serverData.version
    if ('userLevel' in serverData) data.userLevel = serverData.userLevel
    if ('hints' in serverData) data.hints = serverData.hints
    if ('hasAdPass' in serverData) data.hasAdPass = serverData.hasAdPass
  }
  
  #getOptions = (data, serverData) => {
    // old
    if (serverData.options) {
      data.option_isPlayMusic = this.#getSafeValue(serverData.options, 'isPlayMusic')
      data.option_isPlaySFX = this.#getSafeValue(serverData.options, 'isPlaySfx')
      data.option_isLight = this.#getSafeValue(serverData.options, 'isLight')
      data.option_isDebug = this.#getSafeValue(serverData.options, 'isDebug')
    }
    
    // old
    if ('isPlayMusic' in serverData) data.option_isPlayMusic = serverData.isPlayMusic
    if ('isPlaySfx' in serverData) data.option_isPlaySFX = serverData.isPlaySfx
    if ('isLight' in serverData) data.option_isLight = serverData.isLight
    if ('isDebug' in serverData) data.option_isDebug = serverData.isDebug
    
    // new
    if ('option_isPlayMusic' in serverData) data.option_isPlayMusic = serverData.option_isPlayMusic
    if ('option_isPlaySFX' in serverData) data.option_isPlaySFX = serverData.option_isPlaySFX
    if ('option_isLight' in serverData) data.option_isLight = serverData.option_isLight
    if ('option_isDebug' in serverData) data.option_isDebug = serverData.option_isDebug
  }
  
  #getSavedLevel = (data, serverData) => {
    // old
    if (serverData.savedLevel && typeof serverData.savedLevel === 'object') {
      data.levelIndex = this.#getSafeValue(serverData.savedLevel, 'levelIndex')
      data.skinIndex  = this.#getSafeValue(serverData.savedLevel, 'skinIndex')
      data.partIndex  = this.#getSafeValue(serverData.savedLevel, 'partIndex')
    }
    
    // old (плоская структура, без вложенности)
    if ('levelIndex' in serverData) data.levelIndex = serverData.levelIndex
    if ('skinIndex' in serverData) data.skinIndex = serverData.skinIndex
    if ('partIndex' in serverData) data.partIndex = serverData.partIndex
    
    // new (явные префиксы, если поменяется структура)
    if ('savedLevel_levelIndex' in serverData) data.levelIndex = serverData.savedLevel_levelIndex
    if ('savedLevel_skinIndex' in serverData) data.skinIndex = serverData.savedLevel_skinIndex
    if ('savedLevel_partIndex' in serverData) data.partIndex = serverData.savedLevel_partIndex
    
    // v0.0004
    if (serverData.config) {
      data.partIndex = serverData.config.partIndex
    }
  }
  
  #getTimers = (data, serverData) => {
    // old (вложенная структура timers)
    if (serverData.timers) {
      if ('btnFree' in serverData.timers) data.timer_StoreBtnReward = serverData.timers.btnFree
      if ('btnHint' in serverData.timers) data.timer_NoHintsPupUpBtnReward = serverData.timers.btnHint
      return
    }
    
    // old (плоская структура)
    if ('btnFree' in serverData) data.timer_StoreBtnReward = serverData.btnFree
    if ('btnHint' in serverData) data.timer_NoHintsPupUpBtnReward = serverData.btnHint
    
    // new (явные префиксы в плоской структуре)
    if ('timer_StoreBtnReward' in serverData) data.timer_StoreBtnReward = serverData.timer_StoreBtnReward
    if ('timer_NoHintsPupUpBtnReward' in serverData) data.timer_NoHintsPupUpBtnReward = serverData.timer_NoHintsPupUpBtnReward
  }

  // появились в 0.0004 версии
  #getTutorial = (data, serverData) => {
    // old (вложенная структура)
    if (serverData.isTutorialCompleted) {
      if ('generator' in serverData.isTutorialCompleted) data.isTutorial_generator = serverData.isTutorialCompleted.generator
      if ('shadows' in serverData.isTutorialCompleted) data.isTutorial_shadows = serverData.isTutorialCompleted.shadows
      if ('words' in serverData.isTutorialCompleted) data.isTutorial_words = serverData.isTutorialCompleted.words
      return
    }
    
    // old (вложенная структура в конфиге)
    if (serverData.config?.isTutorialCompleted) {
      if ('generator' in serverData.config.isTutorialCompleted) data.isTutorial_generator = serverData.config.isTutorialCompleted.generator
      if ('shadows' in serverData.config.isTutorialCompleted) data.isTutorial_shadows = serverData.config.isTutorialCompleted.shadows
      if ('words' in serverData.config.isTutorialCompleted) data.isTutorial_words = serverData.config.isTutorialCompleted.words
      return
    }
    
    // new (явная плоская структура)
    if ('isTutorial_generator' in serverData) data.isTutorial_generator = serverData.isTutorial_generator
    if ('isTutorial_shadows' in serverData) data.isTutorial_shadows = serverData.isTutorial_shadows
    if ('isTutorial_words' in serverData) data.isTutorial_words = serverData.isTutorial_words
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
