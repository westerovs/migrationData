import {defaultData} from '../defaultData.js'

const createProfileProxy = (profile, name = 'GameData') => {
  return new Proxy(profile, {
    get(target, prop) {
      if (!(prop in target)) {
        console.error(`[${name}] ⚠️ Access to unknown key: ${String(prop)}`)
      }
      return target[prop]
    },
    set(target, prop, value) {
      if (!(prop in target)) {
        console.warn(`[${name}] ⚠️ Setting unknown key: ${String(prop)}`)
      }
      target[prop] = value
      return true
    }
  })
}

const validateProfileFields = (serverData) => {
  const defaultKeys = Object.keys(defaultData)
  const profileKeys = Object.keys(serverData)
  let isOk = true
  
  // Проверка на отсутствие обязательных ключей
  defaultKeys.forEach(key => {
    if (!profileKeys.includes(key)) {
      isOk = false
      console.warn(`[FlatData] ❌ Required field: ${key}`)
    }
  })
  
  // Проверка на наличие неизвестных ключей
  profileKeys.forEach(key => {
    if (!defaultKeys.includes(key)) {
      isOk = false
      console.warn(`[FlatData] ⚠️ Unknown field: ${key}`)
    }
  })
  
  if (isOk) {
    console.log('[FlatData] ✅ ServerData structure is valid, all keys are present')
  }
}

export {
  createProfileProxy,
  validateProfileFields
}
