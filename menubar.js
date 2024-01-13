const menuButton = document.getElementById("menu");
const mobile = document.getElementById("responsivo");

menuButton.addEventListener("click", function() {
  if (mobile.style.display === "block") {
    mobile.style.display = "none";
  } else {
    mobile.style.display = "block";
  }
});