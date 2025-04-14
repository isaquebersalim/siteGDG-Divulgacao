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