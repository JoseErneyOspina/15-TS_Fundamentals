// Tipo: void 
// Tipado explicito
function showInfo(user: any): any {
    console.log('User Info', user.id, user.username, user.firstName);
    // return 'hola';
}
showInfo({id: 1, username: 'luixaviles', firstName: 'Luis'});
// Tpiado inferido
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}
showFormattedInfo({id: 1, username: 'luixaviles', firstName: 'Luis'});

// Tipo: void, como tipo de dato de una variable
let unusable: void;
// unusable = null;
unusable = undefined;

// Tipo: never
// Ejemplo de función que nos permita menajar errores en nuestra aplicación
function handleError(code: number, message: string): never {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. code: ${code}`);
}
try {
    handleError(404, 'Not Found');
} catch (error) {
}
// Crear una funcion que defina un bucle infinito para definir la utilidad de utilizar este tipo de dato
function sumNumbers(limit: number): never {
    let sum = 0;
    while(true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
// ciclo infinito, programa nunca termina
