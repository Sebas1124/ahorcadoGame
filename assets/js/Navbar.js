document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const footer = document.getElementById("footer");

    // Configuración de IntersectionObserver
    const options = {
        root: null, // viewport
        threshold: 0.1 // disparará cuando el 10% del footer esté visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // El menú lateral está sobre el footer, moverlo hacia arriba
                sidebar.classList.add("move-up");
            } else {
                // El menú lateral no está sobre el footer, restaurar posición
                sidebar.classList.remove("move-up");
            }
        });
    }, options);

    observer.observe(footer);
});