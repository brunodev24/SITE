document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('#add-box button');
    const viewButton = document.querySelector('#view-box button');

    addButton.addEventListener('click', function() {
        alert('Adicionar item!');
    });

    viewButton.addEventListener('click', function() {
        alert('Visualizar itens!');
    });
});
