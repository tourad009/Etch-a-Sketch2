document.addEventListener("DOMContentLoaded", () => {
    
    // Récupération des éléments du DOM
    const grid = document.querySelector("#grid");
    const resizeBtn = document.querySelector("#resizeBtn");


    // Gestion de la taille de la grille par défaut
    grid.style.display = "flex";
    grid.style.flexWrap = "wrap";

    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.style.width = "calc(100% / 16)";
        div.style.height = "calc(100% / 16)";
        div.style.background = "#fff";
        div.style.border = "1px solid #000";
        div.classList.add("grid-item");
        grid.appendChild(div);
    }

    // Gestion de la taille de la grille lors du clic sur le bouton

    resizeBtn.addEventListener("click", () => {
        grid.innerHTML = "";
        const size = prompt("Enter the size of the grid (max 100):");
        while (size > 100 || size <= 1) {
            alert("Please enter a number between 2 and 100");
            size = prompt("Enter the size of the grid (max 100):");
        }
        grid.style.display = "flex";
        grid.style.flexWrap = "wrap";

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement("div");
            div.style.width = `calc(100% / ${size})`;
            div.style.height = `calc(100% / ${size})`;
            div.style.background = "#fff";
            div.style.border = "1px solid #000";
            div.classList.add("grid-item");
            grid.appendChild(div);
        }
    });

    // Gestion du hovering sur les cases

    grid.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("grid-item")) {
            const randomRed = Math.floor(Math.random() * 256);
            const randomGreen = Math.floor(Math.random() * 256);
            const randomBlue = Math.floor(Math.random() * 256);
            event.target.style.background = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
            event.target.style.transition = "background 0.1s ease-in-out";
        }
    });

    grid.addEventListener("mouseout", (event) => {
        if (event.target.classList.contains("grid-item")) {
            event.target.style.background = "#fff";
            event.target.style.transition = "background 0.1s ease-in-out";
        }
    });

});