 // Vi finder HTML elementet med ID, betalbtn, godkend og annullerBtn. 
const betalBtn = document.getElementById("betalBtn");
const godkendt = document.getElementById("godkendt");
const annullerBtn = document.getElementById("annullerBtn");

 
//“Når man klikker på betalBtn, så kør funktionen under. 
betalBtn.onclick = function () {
  
    // Den blå betalingsknap skjules
  betalBtn.style.display = "none";
  
  // Godkendt-ikonet vises
  godkendt.style.display = "block";

   // Annuller-knappen skjules
  annullerBtn.style.display = "none";

  // Når der er trykket på betalnBtn senes man til tak-siden efter 2 sekunder
  setTimeout(function () {
    window.location.href = "tak.html"; 
  }, 2000);
};

//“Når man klikker på annullerBtn, så kør funktionen under. 
annullerBtn.onclick = function () {
  alert("Betaling annulleret");

  // send videre efter 2 sekunder (starter efter alert lukkes)
  setTimeout(function () {
    window.location.href = "index.html";
  }, 2000);
};







