document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const audio = document.getElementById("birthdayAudio");
  const celebrationEffects = document.getElementById("celebrationEffects");

  // Set the birthday date (5th February 2025 at midnight)
  const birthdayDate = new Date("February 5, 2025 00:00:00").getTime();

  function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = birthdayDate - now;

      if (timeLeft <= 0) {
          startCelebration();
          clearInterval(countdownInterval);
          return;
      }

      document.getElementById("days").innerText = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      document.getElementById("hours").innerText = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      document.getElementById("minutes").innerText = Math.floor((timeLeft / (1000 * 60)) % 60);
      document.getElementById("seconds").innerText = Math.floor((timeLeft / 1000) % 60);
  }

  // Start the countdown immediately
  updateCountdown();
  let countdownInterval = setInterval(updateCountdown, 1000);

  function startCelebration() {
      body.classList.add("celebration");
      audio.play();
      celebrationEffects.classList.remove("hidden");

      for (let i = 0; i < 20; i++) {
          createBalloon();
          createConfetti();
          createCandle();
      }
  }

  function createBalloon() {
      const balloon = document.createElement("img");
      balloon.src = "https://pngimg.com/uploads/baloons/baloons_PNG4971.png";
      balloon.classList.add("balloon");
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.animationDuration = Math.random() * 3 + 4 + "s";
      document.body.appendChild(balloon);
      setTimeout(() => balloon.remove(), 5000);
  }

  function createConfetti() {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
  }

  function createCandle() {
      const candle = document.createElement("img");
      candle.src = "https://www.freeiconspng.com/uploads/candle-png-21.png";
      candle.classList.add("candle");
      candle.style.left = Math.random() * 100 + "vw";
      candle.style.animationDuration = Math.random() * 5 + 6 + "s";
      document.body.appendChild(candle);
      setTimeout(() => candle.remove(), 6000);
  }
});
