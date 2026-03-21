const background = document.querySelector("#background");


document.body.addEventListener("click", function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

    const h1 = document.getElementById("tytul");

    h1.addEventListener("click", function() {
        h1.classList.remove("obrot");
        void h1.offsetWidth; 
        h1.classList.add("obrot");
    });
function pokazGodzine() {
    const teraz = new Date();
    
    let godzina = teraz.getHours();
    let minuty = teraz.getMinutes();
    let sekundy = teraz.getSeconds();

    godzina = godzina < 10 ? "0" + godzina : godzina;
    minuty = minuty < 10 ? "0" + minuty : minuty;
    sekundy = sekundy < 10 ? "0" + sekundy : sekundy;

    document.getElementById("zegar").innerText = 
        godzina + ":" + minuty + ":" + sekundy;
}


setInterval(pokazGodzine, 1000);


pokazGodzine();
