"use strict";
// Type: object
let user;
user = {}; // Object
user = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
console.log('user', user);
// Object vs object (clase JS vs tipo TS)
//console.log('user.username', user.username);
// En este caso nuestro TS lo entiende a object como una instancia de Object JS
const myObj = {
    id: 1,
    username: 'paparazzi',
    firstName: 'Pablo',
    isPro: true
};
const isInstance = myObj instanceof Object; // clase Object JavaScript
console.log('isInstance', isInstance);
console.log('user.username', myObj.username);
// Ejemplo compañero
// Se puede cambiar el dato al acceder al objeto
// Caso #1
const user = {
    id: 1,
    name: 'Harry'
};
const newUser = user;
user.name = 'Henry';
console.log('user', user); // user { id: 1, name: 'Henry' }
console.log('newUser', newUser); // newUser { id: 1, name: 'Henry' }
// Caso #2
let user;
user = {};
user = {
    id: 1,
    name: 'Harry'
};
const newUser = user;
// user.name = 'Henry' // Error
user = Object.assign(Object.assign({}, user), { name: 'Henry' });
console.log('user', user); // user { id: 1, name: 'Henry' }
console.log('newUser', newUser); // newUser { id: 1, name: 'Harry' }
