// CLases

export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

//Modificadores de acceso 
// get y set

class Picture {
    // Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor (   id: number, 
                    title: string, 
                    orientation: PhotoOrientation
                ) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id},
                title: ${this.title},
                orientation: ${this.orientation}]`;
    }
}

class Album {
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(t: string) {
        this._title = t;
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Persoal Pictures');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);


//Accediendo a los miembros 
console.log('picture.id', picture.id); // get id()

picture.id = 100; // private - set id(100);
picture.title = 'Another title'; // private
album.title = 'Personal Activities'; // private
console.log('album', album);
