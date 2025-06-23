import {CURRENT_VERSION} from './testData.js'

const STORAGE_KEYS = {
  version: 'version',
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
  
  timer_StoreBtnReward: 'timer_StoreBtnReward',
  timer_NoHintsPupUpBtnReward: 'timer_NoHintsPupUpBtnReward',
  
  isTutorial_generator: 'isTutorial_generator',
  isTutorial_words: 'isTutorial_words',
  isTutorial_shadows: 'isTutorial_shadows',
  playerId: 'playerId',
  savedAt: 'savedAt'
}


const defaultData = {
  [STORAGE_KEYS.version]: '------------- default 0.006',
  
  [STORAGE_KEYS.userLevel]: '------------- default 0',
  [STORAGE_KEYS.hints]: '------------- default 3',
  [STORAGE_KEYS.hasAdPass]: '------------- default false',
  
  [STORAGE_KEYS.levelIndex]: '------------- default 0',
  [STORAGE_KEYS.skinIndex]: '------------- default 1',
  [STORAGE_KEYS.partIndex]: '------------- default 1',
  
  [STORAGE_KEYS.option_isPlayMusic]: '------------- default true',
  [STORAGE_KEYS.option_isPlaySFX]: '------------- default true',
  [STORAGE_KEYS.option_isLight]: '------------- default true',
  [STORAGE_KEYS.option_isDebug]: '------------- default false',
  
  [STORAGE_KEYS.timer_StoreBtnReward]: '------------- default null',
  [STORAGE_KEYS.timer_NoHintsPupUpBtnReward]: '------------- default null',
  
  [STORAGE_KEYS.isTutorial_generator]: '------------- default false',
  [STORAGE_KEYS.isTutorial_shadows]: '------------- default false',
  [STORAGE_KEYS.isTutorial_words]: '------------- default false',
  
  // new
  [STORAGE_KEYS.playerId]: '------------- default null',
  [STORAGE_KEYS.savedAt]: '------------- default null',
}


export {
  STORAGE_KEYS,
  defaultData
}
