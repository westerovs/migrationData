const fieldMoves = {
  partIndex: ['savedLevel'],
}

// 🔧 утилита для вложенной записи
const setDeep = (obj, path, key, value) => {
  let target = obj
  for (const segment of path) {
    if (!target[segment]) target[segment] = {}
    target = target[segment]
  }
  target[key] = value
}

export const migrateData = (oldData, template, currentVersion, isTopLevel = true) => {
  const newData = structuredClone(template)
  
  for (const key in oldData) {
    // 👇 перенос ключей по карте
    if (fieldMoves[key]) {
      setDeep(newData, fieldMoves[key], key, oldData[key])
      continue
    }
    
    if (template.options && key in template.options) {
      if (!newData.options) newData.options = {}
      newData.options[key] = oldData[key]
      continue
    }
    
    if (key in newData) {
      if (typeof oldData[key] === 'object' && oldData[key] !== null && !Array.isArray(oldData[key])) {
        newData[key] = migrateData(oldData[key], newData[key], currentVersion, false)
      } else {
        newData[key] = oldData[key]
      }
      continue
    }
    
    console.warn(`удалённое или устаревшее поле '${key}' проигнорировано`)
  }
  
  if (isTopLevel) newData.version = currentVersion
  
  return newData
}

