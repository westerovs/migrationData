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
}

const defaultData = {
  [STORAGE_KEYS.version]: CURRENT_VERSION,
  
  [STORAGE_KEYS.userLevel]: 1,
  [STORAGE_KEYS.hints]: 3,
  [STORAGE_KEYS.hasAdPass]: false,
  
  [STORAGE_KEYS.levelIndex]: 0,
  [STORAGE_KEYS.skinIndex]: 1,
  [STORAGE_KEYS.partIndex]: 1,
  
  [STORAGE_KEYS.option_isPlayMusic]: true,
  [STORAGE_KEYS.option_isPlaySFX]: true,
  [STORAGE_KEYS.option_isLight]: true,
  [STORAGE_KEYS.option_isDebug]: false,
  
  [STORAGE_KEYS.timer_StoreBtnReward]: null,
  [STORAGE_KEYS.timer_NoHintsPupUpBtnReward]: null,

  [STORAGE_KEYS.isTutorial_generator]: false,
  [STORAGE_KEYS.isTutorial_shadows]: false,
  [STORAGE_KEYS.isTutorial_words]: false,
  
  // new
  playerId: null,
  savedAt: null, // дата последнего сохранения
}

export {
  STORAGE_KEYS,
  defaultData
}
