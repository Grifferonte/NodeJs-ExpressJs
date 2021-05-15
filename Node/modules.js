// MODULES

const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative_flavor');
require('./mind_grenade');

// console.log(data);
// console.log(names);

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);