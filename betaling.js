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

  // send videre efter 2 sekunder til tak-siden
  setTimeout(function () {
    window.location.href = "tak.html"; 
  }, 2000);
};

annullerBtn.onclick = function () {
  alert("Betaling annulleret");

  // send videre efter 2 sekunder (starter efter alert lukkes)
  setTimeout(function () {
    window.location.href = "index.html";
  }, 2000);
};







