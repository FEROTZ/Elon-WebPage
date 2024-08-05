document.addEventListener("DOMContentLoaded", function () {
    
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

            document.querySelectorAll('#dates a').forEach(link => {
                link.classList.remove('selected');
                link.querySelector('span').classList.remove('highlight');
            });
            this.classList.add('selected');
            this.querySelector('span').classList.add('highlight');
        });
    });

    const links = document.querySelectorAll("#dates a");
    const sections = document.querySelectorAll(".content");
    const scrollContainer = document.querySelector('.outer-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                links.forEach(link => {
                    link.classList.remove("selected");
                    link.querySelector('span').classList.remove('highlight');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add("selected");
                        link.querySelector('span').classList.add('highlight');
                    }
                });
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        root: scrollContainer,
        threshold: 0.5, 
        delay: 100
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
