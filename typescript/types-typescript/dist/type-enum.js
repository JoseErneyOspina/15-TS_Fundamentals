"use strict";
// enum
// orientacion para Fotografias
/* const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3; */
// En el mundo typeScript podemos representar estos valores númericos como si fueran un nuevo tipo
// Lo hacemos con la palabra enum y le asignamos un nombre a dicho enumerado
// Dentro de nuestro enumerado, nosotros tenemos la libertad de definir los diferentes valores que hacen referencia al contexto del problema que estamos resolviendo
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; // 3
})(PhotoOrientation || (PhotoOrientation = {}));
// Como usar estos enum o enumerados en nuestro proyecto
const landscape = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);
// Modificar los valores del enum
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["square"] = 12] = "square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama"; // 13
})(PictureOrientation || (PictureOrientation = {}));
console.log('portrait', PictureOrientation.Portrait);
// Otra forma de personalizar los valores de nuestro enum
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "Mex";
    Country["EEUU"] = "usa";
    Country["Espa\u00F1a"] = "esp";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log('country', country);
// Extender enum o enumerados
var DiasLaborales;
(function (DiasLaborales) {
    DiasLaborales["Lunes"] = "MON";
    DiasLaborales["Martes"] = "TUE";
    DiasLaborales["Miercoles"] = "WED";
    DiasLaborales["Jueves"] = "THU";
    DiasLaborales["Viernes"] = "FRI";
})(DiasLaborales || (DiasLaborales = {}));
var DiasFinSemana;
(function (DiasFinSemana) {
    DiasFinSemana["Sabado"] = "SAT";
    DiasFinSemana["Domingo"] = "SUN";
})(DiasFinSemana || (DiasFinSemana = {}));
const Semana = Object.assign(Object.assign({}, DiasLaborales), DiasFinSemana);
console.log(Semana.Lunes); // MON
console.log(Semana.Sabado); // SAT
// usando asign para extender
var FirstEnum;
(function (FirstEnum) {
    FirstEnum["value1"] = "value1";
    FirstEnum["value2"] = "value2";
})(FirstEnum || (FirstEnum = {}));
var SecondEnum;
(function (SecondEnum) {
    SecondEnum["value3"] = "value3";
    SecondEnum["value4"] = "value4";
})(SecondEnum || (SecondEnum = {}));
let testEnum = Object.assign({}, FirstEnum, SecondEnum);
console.log(testEnum.value4); // value 4
