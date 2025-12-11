const bearTrigger   = document.getElementById("teddy-default");
const bearImg       = document.getElementById("teddy-img");
const popupOverlay  = document.getElementById("bear-popup-overlay");
const popupCloseBtn = document.getElementById("popup-close-btn");

// DINE FILNAVNE:
const GIF_PEEK   = "images/bamsevinker_show.gif"; // normal: bamse kigger frem
const GIF_HIDDEN = "images/bamsevinker_hide.gif";        // skjult: bamse længere nede

// Flag: popup er lukket → hover-adfærd aktiveres
let hasClosedPopup = false;

// Klik på bamsen → vis popup
bearTrigger.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

// Luk popup (kryds)
popupCloseBtn.addEventListener("click", () => {
  closePopupAndLowerBear();
});

// Luk popup ved klik udenfor boksen
popupOverlay.addEventListener("click", (event) => {
  if (event.target === popupOverlay) {
    closePopupAndLowerBear();
  }
});

function closePopupAndLowerBear() {
  popupOverlay.style.display = "none";

  // Bamser trækker sig ned + skifter GIF
  hasClosedPopup = true;
  bearTrigger.classList.add("lowered");
  bearImg.src = GIF_HIDDEN;
}

// Hover → kig frem  
bearTrigger.addEventListener("mouseenter", () => {
  if (!hasClosedPopup) return;
  bearTrigger.classList.remove("lowered");
  bearImg.src = GIF_PEEK;
});

// Hover ud → træk sig tilbage igen
bearTrigger.addEventListener("mouseleave", () => {
  if (!hasClosedPopup) return;
  bearTrigger.classList.add("lowered");
  bearImg.src = GIF_HIDDEN;
});