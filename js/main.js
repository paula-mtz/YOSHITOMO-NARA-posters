/* MENU RESPONSIVE / HEADER */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}


/* CALCULO DE TICKETS */

function costeTotal() {
    console.log("----------- función costeTotal");

    let numeroEntradas = document.getElementById("numero").value;
    let valorTicket = document.getElementById("ticket").value;

    let costePorEntrada = 0;

    if (valorTicket === "general") {
        costePorEntrada = 100;
    } else if (valorTicket === "student") {
        costePorEntrada = 70;
    } else if (valorTicket === "opening") {
        costePorEntrada = 150;
    }

    let costeEntradas = "$" + (numeroEntradas * costePorEntrada) + " mxn";

    document.getElementById("coste").innerHTML = costeEntradas;
}


/* MODAL DE COMPRA */

function comprar() {
    console.log("----------- función comprar");

    document.getElementById("nom").innerHTML = document.getElementById("nombre").value;
    document.getElementById("corr").innerHTML = document.getElementById("correo").value;
    document.getElementById("num").innerHTML = document.getElementById("numero").value;
    document.getElementById("ct").innerHTML = document.getElementById("coste").innerHTML;

    let valorTicket = document.getElementById("ticket").value;
    let nombreTicket = "";

    if (valorTicket === "general") {
        nombreTicket = "General admission - $100 mxn";
    } else if (valorTicket === "student") {
        nombreTicket = "Student ticket - $70 mxn";
    } else if (valorTicket === "opening") {
        nombreTicket = "Opening night - $150 mxn";
    }

    document.getElementById("tipo").innerHTML = nombreTicket;

    document.getElementById("modal").style.display = "flex";

    return false;
}

function cerrarVentana() {
    console.log("----------- función cerrarVentana");

    document.getElementById("modal").style.display = "none";
}




const galleryItems = document.querySelectorAll(".gallery-grid figure");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxText = document.getElementById("lightboxText");
const closeLightbox = document.getElementById("closeLightbox");

galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
        const img = item.querySelector("img");
        const caption = item.querySelector("figcaption");

        if (lightbox && lightboxImg && lightboxText) {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxText.innerHTML = caption.innerHTML;
        }
    });
});

if (closeLightbox && lightbox) {
    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
}

/* FILTROS DE GALLERY */

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryFigures = document.querySelectorAll(".gallery-grid figure");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const filter = button.getAttribute("data-filter");

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active-filter");
        });

        button.classList.add("active-filter");

        galleryFigures.forEach(function (figure) {
            const category = figure.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                figure.style.display = "block";
            } else {
                figure.style.display = "none";
            }
        });
    });
});