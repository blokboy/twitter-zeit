const fs = require('fs')
const path = require('path')

const getRandomIntFromArray = (arr) => {
  if(!arr) return false
  else arr[Math.floor(Math.random() * arr.length)]
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomRange = (min, max, fixed) => {
  return (Math.random() * (max - min) + min).toFixed(fixed) * 1
}

const extensionCheck = (url) => {
  const fileExtension = path.extname(url).toLowerCase()
  const extensions = ['.png', '.jpg', '.jpeg', '.gif']

  return extensions.indexOf(fileExtension) !== -1
}

const getFilenameFromURL = (url) => {
  return url.substring(url.lastIndexOf('/') + 1)
}

module.exports = {
  getRandomInt,
  getRandomRange,
  getRandomIntFromArray,
  getFilenameFromURL,
  extensionCheck
};
