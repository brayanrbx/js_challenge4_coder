// clase para manejo del localstorage
export class Datos {
    traerLibros() {
        let libros;
        if (localStorage.getItem('libros') === null) {
            libros = [];
        }
        else {
            libros = JSON.parse(localStorage.getItem('libros'));
        }
        return libros;
    }

    agregarLibro(book, traerLibro) {
        traerLibro.push(book);
        localStorage.setItem('libros', JSON.stringify(traerLibro));
    }

    removerLibro(isbn, libros) {
        libros.forEach((libro, index) => {
            if (libro.isbn === isbn) {
                libros.splice(index, 1);
            }
        });
        localStorage.setItem('libros', JSON.stringify(libros));
    }
};