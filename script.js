function playSong() {
  document.getElementById('bgSong').play();
}

function checkPassword() {
  const input = document.getElementById('password').value;
  const error = document.getElementById('error');
  const secretContent = document.getElementById('secretContent');
  if (input === "iloveyou") {
    secretContent.style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "Wrong password, try again ❤️";
  }
}

// Counter (days since a given date)
const startDate = new Date("2023-07-15"); // Change to your actual start date
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
if (document.getElementById("counter")) {
  document.getElementById("counter").textContent = diffDays + " days together ❤️";
}
