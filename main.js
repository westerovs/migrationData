import {migrateData} from './src/migrateDataV2.js'
import {version3, version3_5, version4, version5, defaultData,} from './src/testData.js'
import {buildFlatDataStrict} from './src/buildFlatDataStrict.js'

const actualData = migrateData(version3)
// console.log('data:', actualData)

const actualData2 = buildFlatDataStrict(version3_5)
console.group('↓--- actualData ---↓')
Object.entries(actualData2).forEach(([key, value]) => console.log(key, value))
console.log('-----------------')
console.groupEnd()

