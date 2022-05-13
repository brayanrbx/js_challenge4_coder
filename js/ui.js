//clase que contiene los metodos del libro para visualizarlos en la pagina
export class Ui {
    agregarLibrosLista(libros) {
        const $lista = document.getElementById('book-list');
        const $fila = document.createElement('tr');
        $fila.innerHTML = `
            <td>${libros.titulo}</td>
            <td>${libros.autor}</td>
            <td>${libros.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;
        $lista.appendChild($fila);
    }

    eliminarLibro(element) {
        if (element.classList.contains('delete')) {
            element.closest('tr').remove()
        }
    }

    mostrarAlerta(mensaje, class_name) {
        const $div = document.createElement('div');
        $div.className = `alert alert-${class_name}`;
        $div.appendChild(document.createTextNode(mensaje));

        const $container = document.querySelector('.container'),
              $form = document.getElementById('libro-form');
        $container.insertBefore($div, $form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    // metodo para dejar los campos vacios
    limpiarCampos() {
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('isbn').value = '';
    }
};
