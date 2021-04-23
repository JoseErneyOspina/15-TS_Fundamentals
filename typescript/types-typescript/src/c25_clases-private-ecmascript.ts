// clases - atributos y funciones private
// CLases

export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    public constructor (   id: number, 
                    title: string, 
                    orientation: PhotoOrientation
                ) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.#id},
                title: ${this.#title},
                orientation: ${this.#orientation}]`;
    }
}

class Album {
    #id: number;
    #title: string;
    #pictures: Picture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }
}

const album: Album = new Album(1, 'Persoal Pictures');
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);


// Accediendo a los miembros publicos - public
//picture.id = 100; // private
// picture.title = 'Another title'; // private
// album.title = 'Personal Activities'; // private
console.log('album', album);
