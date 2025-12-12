const betalBtn = document.getElementById("betalBtn");
const godkendt = document.getElementById("godkendt");
const annullerBtn = document.getElementById("annullerBtn");


betalBtn.onclick = function () {
  
    // skjul blå betalingsknap
  betalBtn.style.display = "none";
  
  // vis godkendt-ikon
  godkendt.style.display = "block";

   // skjul annuller-knap
  annullerBtn.style.display = "none";
};

annullerBtn.onclick = function () {
  alert("Betaling annulleret");
};