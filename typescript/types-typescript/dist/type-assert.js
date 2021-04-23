"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <> // Angle bracket syntax en TS  ------------------------->
let username;
username = 'luixaviles';
username = 'luis';
// tenemos una cadena, TS confia en mi!
let message = username.length > 5
    ? `welcome ${username}`
    : 'Username is too short';
console.log('message', message);
let usernameWithID = 'luixaviles 1';
// Como obetner el username a partir de esta expresión?
username = usernameWithID.substring(0, 10);
console.log('Usernmae only', username);
// sintaxis "as" ------------------------->
message = username.length > 5
    ? `welcome ${username}`
    : 'Username is too short';
let helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username', username);
