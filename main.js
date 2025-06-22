import {version3, version3_5, version4, version5, version6} from './src/testData.js'
import {createProfileProxy} from './src/utils/utils.js'
import FlatData from './src/FlatData.js'

const flatData = new FlatData()
const rawData  = flatData.getData(version6)
// Proxy для контроля доступа
const gameData = createProfileProxy(rawData, 'PlayerProfile')

console.log('hints', gameData.hints)
console.log('gems:', gameData.gems)
// testing errors
gameData.testField = 18
console.log(gameData.gems)
