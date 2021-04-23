"use strict";
console.log('Hola TypeScript con Platzi');
// Tipos de datos
// Tipo: number
// Tipado explicito
let phone;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error
// Tipado inferido
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error
let hex = 0xf00d;
// Para mensionar al compilador de typescript que estamos usando un hexadecimal, hacemos uso de la siguiente notación: primero deifnimos un 0x y acontinuación digitos que esten entre el 0 y el caracter f, signfica que podemos usar del 0 al 9
let binary = 0b1010;
// Definimos un binario con el 0 y el caracter b que significa que definiremos a continuación un valor binario, para valores binarioo usamos digitos entre el 1 y 0
let octal = 0o744;
// Para el octal usamos un 0 como caracter inicial, una o que significa octal y definimos digitos que esten definidos entre 0 y 7
// Tipo: boolean
// Tipado explicito
let isPro;
isPro = true;
// isPro = 1; // error
// Tipado inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 0; // Error
// Tipo: string
// Tipado explicito
let username = 'luixaviles';
username = "Luis";
// username = true; // Error
// Template string
// Uso del back-tick ``
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Aviles'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
