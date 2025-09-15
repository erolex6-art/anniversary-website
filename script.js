// Counter for days since start
const startDate = new Date("2024-07-15"); // <-- change to your real start date
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
if (document.getElementById("daysCounter")) {
  document.getElementById("daysCounter").innerText = `${diffDays} days together 💕`;
}

// Countdown to next anniversary
const nextAnniversary = new Date("2026-07-15"); // <-- change to your next anniversary
function updateCountdown() {
  const now = new Date();
  const timeLeft = nextAnniversary - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  if (document.getElementById("countdown")) {
    document.getElementById("countdown").innerText = `${days} days left until our next anniversary 💝`;
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Secret page password
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");
  if (input === "iloveyou") {
    document.getElementById("secretContent").style.display = "block";
    error.innerText = "";
  } else {
    error.innerText = "Wrong password, try again 💔";
  }
}
