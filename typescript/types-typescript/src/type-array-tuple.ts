// Tipo: array

// corchetes [] 
// Tipado explicito
let users: string[];
users = ['luixaviles', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test'] // Error!

// Tipado inferido
let otherUsers = ['luixaviles', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test'] // Error!

// Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accediendo a los valores en un Array
console.log('first user', users[0]);
console.log('first tittle', pictureTitles[0]);



// Propiedades en Array
console.log('users.length', users.length);
// Uso de funciones en Arrays
// Podemos pensar en agregar nuevos usuarios en la estructura de datos existente via la función .push
users.push('aPlatziUser');
users.sort();
console.log('users', users);
