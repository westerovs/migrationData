import {migrateData} from './migrateData.js'

const CURRENT_VERSION = 0.003

const PlayerStats = {
  // lvl data
  version: CURRENT_VERSION,
  savedLevel: {levelIndex: 0, skinIndex: 1, partIndex: 1},
  userLevel: 1,
  hints: 3,
  // options
  options: {
    isPlayMusic: true,
    isPlaySFX: true,
    isLight: true,
    isDebug: false,
  },

  // features
  timers: {},
  hasAdPass: false
}

// тестовая дата, версии не совпадают
const dataFromServer = {
  version: 0.001,
  savedLevel: {levelIndex: 45, skinIndex: 4},
  userLevel: 91,
  partIndex: 8,
  hints: 33,
  // options
  isPlayMusic: true,
  isPlaySFX: true,
  isLight: false,
  isDebug: false,
  // features
  timers: {},
  hasAdPass: true,
  // поля которые сохранены у игрока, но от которых я отказался в новой версии
  coins: 555,
}

// тестовая дата, версии совпадают
const updateData = {
  version: CURRENT_VERSION,
  savedLevel: {levelIndex: 45, skinIndex: 4, partIndex: 8},
  userLevel: 91,
  hints: 33,
  // options
  isPlayMusic: false,
  isPlaySFX: false,
  isLight: false,
  isDebug: false,
  // features
  timers: {},
  hasAdPass: true,
}

const loadData = (data) => {
  // если нет даты, то возвращаем PlayerStats
  if (!data || Object.keys(data).length === 0) {
    console.log('сохранение не обнаружено, устанавливает стандартные значения')
    return PlayerStats
  }

  // Если данные есть, обновляем поля класса
  if (data && data.version < CURRENT_VERSION) {
    console.warn('версия игрока устарела!')
    return migrateData(data, PlayerStats, CURRENT_VERSION)
  }

  if (data && data.version === CURRENT_VERSION) {
    console.log('версия игрока актуальна')
    return data
  }
}

const playerData = loadData(dataFromServer)
console.log('playerData:', playerData)


