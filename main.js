import {version3, version3_5, version4, version5, } from './src/testData.js'
import {buildFlatDataStrict} from './src/buildFlatDataStrict.js'

const actualData2 = buildFlatDataStrict(version5)
console.group('↓--- actualData ---↓')
Object.entries(actualData2).forEach(([key, value]) => console.log(key, value))
console.log('-----------------')
console.groupEnd()

