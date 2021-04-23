// enum

// orientacion para Fotografias
/* const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3; */

// En el mundo typeScript podemos representar estos valores númericos como si fueran un nuevo tipo
// Lo hacemos con la palabra enum y le asignamos un nombre a dicho enumerado
// Dentro de nuestro enumerado, nosotros tenemos la libertad de definir los diferentes valores que hacen referencia al contexto del problema que estamos resolviendo
enum PhotoOrientation {
    Landscape = 0,   // 0
    Portrait = 1,    // 1 
    square = 2,      // 2
    Panorama = 3    // 3
}

// Como usar estos enum o enumerados en nuestro proyecto
const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

// Modificar los valores del enum
enum PictureOrientation {
    Landscape = 10,   // 10
    Portrait,         // 11 
    square,           // 12
    Panorama          // 13
}
console.log('portrait', PictureOrientation.Portrait);

// Otra forma de personalizar los valores de nuestro enum
enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'Mex',
    EEUU = 'usa',
    España = 'esp'
}
const country: Country = Country.Colombia;
console.log('country', country);

// Extender enum o enumerados
enum DiasLaborales {
    Lunes = 'MON',
    Martes = 'TUE',
    Miercoles = 'WED',
    Jueves = 'THU',
    Viernes = 'FRI'
}

enum DiasFinSemana {
Sabado = 'SAT',
Domingo = 'SUN'
}

const Semana = {
...DiasLaborales,
...DiasFinSemana
}

console.log(Semana.Lunes); // MON
console.log(Semana.Sabado); // SAT


// usando asign para extender
enum FirstEnum {
    value1 = 'value1',
    value2 = 'value2'
}

enum SecondEnum {
    value3 = 'value3',
    value4 = 'value4'
}

let testEnum = Object.assign({}, FirstEnum, SecondEnum);

console.log(testEnum.value4) // value 4