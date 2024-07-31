// Seleccionar elementos necesarios
const textContents = document.querySelectorAll('.text-container .content');
const innerContainer = document.querySelector('.inner-container');
const dateLinks = document.querySelectorAll('#dates a');

let currentActiveIndex = -1;
let startY = 0;
let scrollTopStart = 0;

// Función para actualizar el contenido basado en el scroll
function updateContent() {
    const containerHeight = innerContainer.clientHeight;
    const scrollTop = innerContainer.scrollTop;
    const index = Math.round(scrollTop / containerHeight);

    if (index !== currentActiveIndex) {
        if (currentActiveIndex !== -1) {
            textContents[currentActiveIndex].classList.remove('active');
        }

        if (index >= 0 && index < textContents.length) {
            textContents[index].classList.add('active');
        }

        currentActiveIndex = index;
    }
}

// Manejo del evento de scroll
innerContainer.addEventListener('scroll', updateContent);

// Manejo del evento de clic en los enlaces de fecha
dateLinks.forEach((anchor, index) => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        dateLinks.forEach(a => a.classList.remove('selected'));
        this.classList.add('selected');

        // Calcular el desplazamiento objetivo
        const targetOffset = index * innerContainer.clientHeight;

        // Desplazamiento suave
        innerContainer.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});

// Manejo de eventos táctiles para desplazar con el dedo
innerContainer.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
    scrollTopStart = innerContainer.scrollTop;
}, { passive: true });

innerContainer.addEventListener('touchmove', function(e) {
    const touchY = e.touches[0].clientY;
    const distanceY = touchY - startY;

    innerContainer.scrollTop = scrollTopStart - distanceY;

    // Prevenir el comportamiento predeterminado de desplazamiento del navegador
    e.preventDefault();
}, { passive: false });

// Inicializar el contenido activo
updateContent();