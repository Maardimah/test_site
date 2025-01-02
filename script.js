document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.querySelector("#welcome-section h2");
    welcomeMessage.style.opacity = 0;
    welcomeMessage.style.transition = "opacity 2s";

    setTimeout(() => {
        welcomeMessage.style.opacity = 1;
    }, 500);
});
