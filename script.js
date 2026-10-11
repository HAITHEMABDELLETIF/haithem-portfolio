const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "🌙 Mode sombre";
  } else {
    themeBtn.textContent = "☀️ Mode clair";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
