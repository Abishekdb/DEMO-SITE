document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const linkParam = urlParams.get('DB_ANNA');
    const countdownElement = document.getElementById("countdown");
    const progressElement = document.getElementById("progress");
    const manualRedirect = document.getElementById("manualRedirect");
    const cancelRedirect = document.getElementById("cancelRedirect");
    
    let timeLeft = 5;
    let redirecting = true;

    if (linkParam) {
        const interval = setInterval(() => {
            if (!redirecting) {
                clearInterval(interval);
                return;
            }

            timeLeft--;
            countdownElement.innerText = timeLeft;
            progressElement.style.width = `${(5 - timeLeft) * 20}%`;

            if (timeLeft <= 0) {
                clearInterval(interval);
                if (redirecting) {
                    window.location.href = `https://telegram.me/Testingpermanentbot?start=${linkParam}`;
                }
            }
        }, 1000);
        
        manualRedirect.href = `https://telegram.me/Testingpermanentbot?start=${linkParam}`;
    } else {
        document.querySelector("h1").innerText = "Invalid Link!";
        progressElement.style.display = "none";
    }

    cancelRedirect.addEventListener("click", function() {
        redirecting = false;
        countdownElement.innerText = "Cancelled";
        progressElement.style.width = "0%";
        document.querySelector(".spinner").style.display = "none";
    });
});
