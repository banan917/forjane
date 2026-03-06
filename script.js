// 💕 Генерация сердечек фона
const heartsContainer = document.querySelector(".hearts-bg");

function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 28) + "px";
    heart.style.animationDuration = (6 + Math.random() * 6) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 400);


// ✨ Работа кнопки
const button = document.getElementById("loveBtn");
const message = document.getElementById("hiddenMessage");

button.addEventListener("click", () => {
    message.classList.add("show");

    // Вспышка сердечек
    for (let i = 0; i < 25; i++) {
        const burst = document.createElement("span");
        burst.innerHTML = "❤️";
        burst.style.position = "fixed";
        burst.style.left = "50%";
        burst.style.top = "50%";
        burst.style.fontSize = "24px";
        burst.style.transition = "1s ease-out";
        burst.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(burst);

        setTimeout(() => {
            burst.style.left = Math.random() * 100 + "vw";
            burst.style.top = Math.random() * 100 + "vh";
            burst.style.opacity = "0";
        }, 10);

        setTimeout(() => burst.remove(), 1000);
    }
});
