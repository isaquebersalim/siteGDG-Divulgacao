document.addEventListener("DOMContentLoaded", function () {
    function startCountdown() {
        const eventDate = new Date("May 24, 2025 09:00:00").getTime();
        const timer = setInterval(function () {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                clearInterval(timer);
                document.getElementById("countdown").innerHTML = "Evento Iniciado!";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
        }, 1000);
    }
    startCountdown();
});

const toggleBtn = document.getElementById("toggle-theme");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);

    // Ícone muda entre lua ☾ e sol ☀
    toggleBtn.innerHTML = newTheme === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});
