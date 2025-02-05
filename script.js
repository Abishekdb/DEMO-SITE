document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const linkParam = urlParams.get('DB_ANNA');
    const countdownElement = document.getElementById("countdown");
    const manualRedirect = document.getElementById("manualRedirect");
    const cancelRedirect = document.getElementById("cancelRedirect");

    let timeLeft = 5;
    let redirecting = true;

    if (linkParam) {
        const telegramUrl = `https://telegram.me/Testingpermanentbot?start=${linkParam}`;
        manualRedirect.href = telegramUrl; 

        const interval = setInterval(() => {
            if (!redirecting) {
                clearInterval(interval);
                return;
            }

            timeLeft--;
            countdownElement.innerText = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(interval);
                if (redirecting) {
                    window.location.href = telegramUrl;
                }
            }
        }, 1000);
    }

    cancelRedirect.addEventListener("click", function() {
        redirecting = false;
        countdownElement.innerText = "Cancelled";
    });
});
