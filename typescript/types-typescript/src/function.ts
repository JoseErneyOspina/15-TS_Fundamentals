// Funcion al estilo de JS
// Crear una fotografia 
// function + nombre + parametros para poder crearce

/* function createPicture(title, date, size) {
    // title
} */

// Usamos TS, definimos tipos para parametros ------------------------------------>
/* type SquareSize = '100x100' | '500x500' | '1000x1000';
function createPicture(title: string, date: string, size: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}
createPicture('My birthday', '2020-03-10', '500x500'); */
// createPicture('Colombia Trip', '2020-03'); // Error! solo hay dos parametros y necesita 3

// Haciendo uso de los Parametros opcionales en funciones "?" ------------------------------------>
type SquareSize = '100x100' | '500x500' | '1000x1000';
function createPicture(title?: string, date?: string, size?: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}
createPicture('My birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '2020-03');
createPicture('Colombia Trip');
createPicture();

// Flat Array function ------------------------------------>
// Forma plana entre comillas de crear nuestras funciones 
let createPic = (title: string, date: string, size: SquareSize): object => {
    /* return {
        title: title,
        date: date,
        size: size
    } */
    return {
        title,
        date,
        size,
    }
};
const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);

// Tipo de retorno con TypeScrip ------------------------------------>
function handleError(code: number, message: string): never | string {
    // Procesamiento del codigo, mensaje
    if(message == 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    } else {
        return 'An error has occurred';
    }
}
try {
    let result = handleError(200, 'OK'); // string
    console.log('result', result);
    result = handleError(404, 'error'); // never
    console.log('result', result);
} catch (err) {
    
}