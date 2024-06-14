const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    if (botaoMostrarProjetos.classList.contains('mostrando')) {
        // Se o botão está no estado de mostrando, então vamos esconder os projetos
        esconderProjetos();
        botaoMostrarProjetos.classList.remove('mostrando');
        botaoMostrarProjetos.textContent = 'Mostrar mais';
    } else {
        // Caso contrário, mostramos os projetos
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
