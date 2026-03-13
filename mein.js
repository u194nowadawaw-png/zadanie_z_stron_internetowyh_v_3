    const klocek = document.getElementById("klocek");
    const punktyText = document.getElementById("punkty");

    let x = 200;
    let y = 200;
    const speed = 10;
    let punkty = 0;

    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp") y -= speed;
        if (event.key === "ArrowDown") y += speed;
        if (event.key === "ArrowLeft") x -= speed;
        if (event.key === "ArrowRight") x += speed;

        klocek.style.left = x + "px";
        klocek.style.top = y + "px";

        sprawdzKolizje();
    });

    function tworzenieKropki() {
        const kropka = document.createElement("div");
        kropka.classList.add("kropka");

        const maxX = window.innerWidth - 20;
        const maxY = window.innerHeight - 20;

        kropka.style.left = Math.random() * maxX + "px";
        kropka.style.top = Math.random() * maxY + "px";

        document.body.appendChild(kropka);

        // Usunięcie po 2 sekundach
        setTimeout(() => {
            if (kropka.parentElement) {
                kropka.remove();
            }
        }, 2000);
    }

    function sprawdzKolizje() {
        const kropki = document.querySelectorAll(".kropka");

        kropki.forEach(kropka => {
            const rect1 = klocek.getBoundingClientRect();
            const rect2 = kropka.getBoundingClientRect();

            if (
                rect1.left < rect2.right &&
                rect1.right > rect2.left &&
                rect1.top < rect2.bottom &&
                rect1.bottom > rect2.top
            ) {
                kropka.remove();
                punkty++;
                punktyText.textContent = "Punkty: " + punkty;
            }
        });
    }

    setInterval(tworzenieKropki, 1000);