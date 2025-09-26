// Função para animar as letras do título
function animarLetrasTitulo() {
    const titulo = document.querySelector('h1');
    
    if (!titulo) return;
    
    const texto = titulo.textContent;
    titulo.innerHTML = texto.split('').map(letra => 
        letra === ' ' ? '<span class="espaco">&nbsp;</span>' : `<span class="letra-titulo">${letra}</span>`
    ).join('');
    
    const letras = titulo.querySelectorAll('.letra-titulo');
    
    letras.forEach((letra, index) => {
        letra.style.display = 'inline-block';
        letra.style.transition = 'transform 0.4s ease';
        
        letra.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.8)';
        });
        
        letra.addEventListener('mouseout', function() {
            // Aguarda 300ms antes de voltar ao normal
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });
}

// Função para os links de navegação
function mouse_sob_links() {
    const listarLinks = document.querySelectorAll(".nav-link");
    
    listarLinks.forEach(link => {
        link.style.display = 'inline-block';
        
        link.addEventListener("mouseover", function() {
            this.classList.add("mouse-sob-link");
        });
        
        link.addEventListener("mouseout", function() {
            this.classList.remove("mouse-sob-link");
        });
    });
}

// Executar quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    mouse_sob_links();
    animarLetrasTitulo();
});