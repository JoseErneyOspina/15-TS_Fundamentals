"use strict";
// CLases
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// SUPERclase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    //set id(id: number) {
    //    this._id = id;
    //}
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
//Modificadores de acceso 
// get y set
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title); // constructor de SUPERclase
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title); // constructor de SUPERclase
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Persoal Pictures');
const picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//Accediendo a los miembros 
console.log('picture.id', picture.id); // get id()
//picture.id = 100; // private - set id(100); luego de estar como readonly en SUPERclase item ya no podemos modificar su estado
picture.title = 'Another title'; // private
album.title = 'Personal Activities'; // private
console.log('album', album);
// Error! - no podemos instanciar o crear objetos a partir de una abstract class
//const item = new Item(1, 'Test title');
//console.log('item', item);
// Probar el miembro static de la clase Picture
console.log('hotoOrientation', Picture.photoOrientation.Landscape);
