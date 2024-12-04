const {readFile , writeFile} = require('fs')

console.log('start')

const first = readFile('./Tutorial/content/subfolder/first.txt', 'utf8')
const second = readFile('./Tutorial/content/subfolder/second.txt', 'utf8')