// Alternativa para manejar el scroll suave en la línea del tiempo
document.querySelectorAll('#dates a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
       
        const scrollContainer = document.querySelector('.outer-container');
       
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const targetTop = targetElement.getBoundingClientRect().top;
        const scrollTop = scrollContainer.scrollTop;
        
        scrollContainer.scrollTo({
            top: targetTop - containerTop + scrollTop,
            behavior: 'smooth'
        });
    });
});
