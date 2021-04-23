export {};

// <> // Angle bracket syntax en TS  ------------------------->
let username: any;
username = 'luixaviles';
username = 'luis';
// tenemos una cadena, TS confia en mi!
let message: string = (<string>username).length > 5
                        ? `welcome ${username}`
                        : 'Username is too short';
console.log('message', message);

let usernameWithID: any = 'luixaviles 1';
// Como obetner el username a partir de esta expresión?
username = (<string>usernameWithID).substring(0, 10);
console.log('Usernmae only', username);

// sintaxis "as" ------------------------->
message = (username as string).length > 5
            ? `welcome ${username}`
            : 'Username is too short';

let helloUser: any;
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username', username);