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