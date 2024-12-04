/*
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
*/
//console.log(data)
//console.log(names)

//sayHi('susan')
//sayHi(names.jhon)
//sayHi(names.peter)

const os = require('os')
//info about current user

const user = os.userInfo()
console.log(user)


//method returns the system uptime in seconds
console.log(`the System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)