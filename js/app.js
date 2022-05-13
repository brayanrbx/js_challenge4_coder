import {Book} from './book.js';
import {Datos} from './datos.js';
import {Ui} from './ui.js';

// instaciamiento de las clases importadas
const ui = new Ui();
const datos = new Datos();

const traerLibro = datos.traerLibros();

// carga de la pagina
document.addEventListener('DOMContentLoaded', () => {
    traerLibro.forEach((libros) => ui.agregarLibrosLista(libros));
});

// controlar el evento submit
document.querySelector('#libro-form').addEventListener('submit', e => {
    e.preventDefault();

    // obtener valores del campo input
    const $titulo = document.getElementById('titulo').value,
          $autor = document.getElementById('autor').value,
          $isbn = document.getElementById('isbn').value;

    if ($titulo === '' || $autor === '' || $isbn === '') {
        ui.mostrarAlerta('Por favor ingrese todos los datos', 'danger');
    }
    else {
        const book = new Book($titulo, $autor, $isbn);
        datos.agregarLibro(book, traerLibro);
        ui.agregarLibrosLista(book);
        ui.mostrarAlerta('Libro agregado a la coleccion', 'success')
        ui.limpiarCampos();
    }
});

// remover libros
document.getElementById('book-list').addEventListener('click', (e) => {
    ui.eliminarLibro(e.target);
    datos.removerLibro(e.target.parentElement.previousElementSibling.textContent, traerLibro);
    ui.mostrarAlerta('Libro eliminado', 'success')
});