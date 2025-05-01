export const migrateData = (oldData, template, currentVersion) => {
  const newData = structuredClone(template)

  for (const key in oldData) {
    if (key in newData) {
      if (typeof oldData[key] === 'object' && !Array.isArray(oldData[key]) && oldData[key] !== null) {
        newData[key] = migrateData(oldData[key], newData[key], currentVersion)
      } else {
        newData[key] = oldData[key]
      }
    } else if (key in newData.options) {
      // migrate flat option to nested
      newData.options[key] = oldData[key]
    } else {
      console.warn(`удалённое или устаревшее поле '${key}' проигнорировано`)
    }
  }

  // возвращаем актуальную версию
  newData.version = currentVersion

  return newData
}
