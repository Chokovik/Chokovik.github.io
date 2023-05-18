const btnModal = document.getElementById('btn-modal');
const modalRegistro = document.getElementById('modal-registro');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');

btnModal.addEventListener('click', function (e) {
    e.preventDefault();
    modalRegistro.style.display = 'block';
});

modalRegistro.addEventListener('click', function (e) {
    if (e.target === this) {
        modalRegistro.style.display = 'none';
    }
});

btnCerrarModal.addEventListener('click', function () {
    modalRegistro.style.display = 'none';
});

function seleccionarCheckbox(checkbox) {
    var checkboxes = document.getElementsByName('sexo');
    checkboxes.forEach(function (cb) {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}