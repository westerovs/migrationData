import {version3, version3_5, version4, version5, } from './src/testData.js'
import FlatData from './src/FlatData.js'

const flatData = new FlatData()
const actualData2 = flatData.getData(version3)
console.group('↓--- actualData ---↓')
Object.entries(actualData2).forEach(([key, value]) => console.log(key, value))
console.log('-----------------')
console.groupEnd()

