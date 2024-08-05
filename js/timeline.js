document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("#dates a");
    const scrollContainer = document.querySelector('.outer-container');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            links.forEach(link => link.classList.remove("selected"));
     
            this.classList.add("selected");

            const containerTop = scrollContainer.getBoundingClientRect().top;
            const targetTop = targetElement.getBoundingClientRect().top;
            const scrollTop = scrollContainer.scrollTop;

            scrollContainer.scrollTo({
                top: targetTop - containerTop + scrollTop,
                behavior: 'smooth'
            });
        });
    });
});