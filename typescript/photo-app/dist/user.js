"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    removeAlbum(album) {
        // Buscar el objeto Abum y si lo encontramos eliminarlo de nuestra estructura de datos
        // Obtenemos la posición respectiva de dicho objeto dentro de nuestro arreglo
        const index = this.album.findIndex(a => a.id == album.id);
        let deletedAlbum;
        if (index >= 0) {
            deletedAlbum = this.album[index];
            this.album.splice(index, 1);
        }
        return deletedAlbum;
    }
}
exports.User = User;
