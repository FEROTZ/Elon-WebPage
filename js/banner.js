document.addEventListener("DOMContentLoaded", () => {
    const stack = document.querySelector(".stack");
    const cards = Array.from(stack.children)
        .filter((child) => child.classList.contains("card"))
        .reverse();

    cards.forEach((card) => stack.appendChild(card));

    function moveCard() {
        const lastCard = stack.querySelector(".card:last-child");
        lastCard.classList.add("swap");

        setTimeout(() => {
            lastCard.classList.remove("swap");
            stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
    }

    let autoplayInterval = setInterval(moveCard, 4000);

    stack.addEventListener("click", function (e) {
        const card = e.target.closest(".card");
        if (card && card === stack.querySelector(".card:last-child")) {
            card.classList.add("swap");

            setTimeout(() => {
                card.classList.remove("swap");
                stack.insertBefore(card, stack.firstElementChild);
            }, 1200);
        }
    });
});