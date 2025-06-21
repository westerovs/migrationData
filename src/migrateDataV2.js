const migrateData = (data) => {
  const playerData = {}
  
  Object.entries(data).forEach(([key, value]) => {
    // console.log(key, value)
    
    // для старых версий, которые не были объектом
    if (key === 'savedLevel') {
      return
    }
    if (key === 'timers') {
      return
    }
    if (key === 'dailyPriceData') {
      return
    }
    
    // преобразует старые ключи для версии 0.0003 в новые
    if (key === 'isPlayMusic') {
      playerData['option_isPlayMusic'] = value
    }
    if (key === 'isPlaySFX') {
      playerData['option_isPlaySFX'] = value
    }
    if (key === 'isDebug') {
      playerData['option_isDebug'] = value
    }
    
    playerData[key] = value
  })
  
  return playerData
}

export {
  migrateData
}
