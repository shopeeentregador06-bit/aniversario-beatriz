const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

async function startMusic() {
  try {
    await music.play();
    musicBtn.textContent = "⏸";
  } catch (e) {
    // Alguns navegadores bloqueiam autoplay com som até o primeiro toque.
  }
}

window.addEventListener("load", startMusic);
document.addEventListener("pointerdown", startMusic, { once: true });

openBtn.addEventListener("click", () => {
  message.classList.remove("hidden");
  openBtn.textContent = "❤️ Mensagem aberta";
  openBtn.disabled = true;
  openBtn.style.opacity = ".75";

  // Tenta iniciar a música após uma ação do usuário.
  music.play().then(() => {
    musicBtn.textContent = "⏸";
  }).catch(() => {});
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => musicBtn.textContent = "⏸").catch(() => {
      alert("Adicione o arquivo assets/bem-chapeu-de-palha.mp3 ao projeto para tocar a música.");
    });
  } else {
    music.pause();
    musicBtn.textContent = "▶";
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > .25 ? "❤️" : "✨";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 650);
