// Når hele HTML'en er loaded og klar, starter vi vores kode.
// Det sikrer, at vi kan finde elementerne på siden.
document.addEventListener("DOMContentLoaded", () => {
// Finder selve "sporet" der flyttes vandret for at skifte review-side.
const track = document.querySelector(".carousel-track");

// Finder ALLE sider (hver side indeholder 3 anmeldelser).
const pages = Array.from(document.querySelectorAll(".carousel-page"));
 // Finder knapperne til at bladre frem og tilbage.
 const prevBtn = document.querySelector(".carousel-btn.prev");
 const nextBtn = document.querySelector(".carousel-btn.next");

 // Hvis et af elementerne mangler, får vi en fejl i konsollen.
 // Dette hjælper dig med debugging.
 if (!track || pages.length === 0 || !prevBtn || !nextBtn) {
   console.error("Kunne ikke finde karrusel-elementerne");
   return; // Stop koden, så vi ikke får flere fejl.
 }

 // Holder styr på, hvilken "side" af anmeldelser vi er på.
 // 0 = første side, 1 = næste osv.
 let currentIndex = 0;

 // Denne funktion flytter track'et til korrekt position.
 // Når du skifter side, skal track'et flyttes -100%, -200% osv.
 function updateCarousel() {
   track.style.transform = `translateX(-${currentIndex * 100}%)`;
 }

 // Når man klikker på højre pil:
 nextBtn.addEventListener("click", () => {
   // Gå én side frem.
   currentIndex++;

   // Hvis vi er forbi sidste side → hop tilbage til den første.
   if (currentIndex >= pages.length) {
     currentIndex = 0;
   }

   // Opdater visningen.
   updateCarousel();
 });

 // Når man klikker på venstre pil:
 prevBtn.addEventListener("click", () => {
   // Gå én side tilbage.
   currentIndex--;

   // Hvis vi er før første side → gå til den sidste.
   if (currentIndex < 0) {
     currentIndex = pages.length - 1;
   }

   // Opdater visningen.
   updateCarousel();
 });
});