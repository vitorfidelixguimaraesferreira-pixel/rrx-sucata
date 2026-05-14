function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

/* CATEGORIAS EXPANSÍVEIS */
document.addEventListener("DOMContentLoaded", () => {

    const categorias = document.querySelectorAll(".categoria-material");

    categorias.forEach(categoria => {

        const topo = categoria.querySelector(".categoria-topo");

        topo.addEventListener("click", () => {

            categoria.classList.toggle("ativo");

        });

    });

});