const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    if (botaoMostrarProjetos.classList.contains('mostrando')) {
     
        esconderProjetos();
        botaoMostrarProjetos.classList.remove('mostrando');
        botaoMostrarProjetos.textContent = 'Mostrar mais';
    } else {
     
        mostrarMaisProjetos();
        botaoMostrarProjetos.classList.add('mostrando');
        botaoMostrarProjetos.textContent = 'Mostrar menos';
    }
});

function esconderProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
