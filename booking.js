// Find knappen der fører videre til næste sektion
const btn = document.querySelector("#btn");

// Find næste sektion (lejeperiode)
const lejePeriode = document.getElementById("baggrundscirkel2");

// Find alle knapper med class="btn"
const pakkeKnapper = document.querySelectorAll(".btn");

// Find sektionen de skal scrolle til
const lejePeriode2 = document.getElementById("baggrundscirkel3");


// Klik på knap1 → scroll til næste sektion
btn.addEventListener("click", () => {

    lejePeriode.scrollIntoView({ behavior: "smooth" });
});


// Giv ALLE knapperne et klik-event
pakkeKnapper.forEach(knap => {
    knap.addEventListener("click", () => {
        lejePeriode2.scrollIntoView({ behavior: "smooth" });
    });
});

// ---------------------------------------------------
// STEP 1 – VÆLG REOLPAKKE
// ---------------------------------------------------

// Find alle pakke-kort (Basic, Easy Peasy, Simple Reuse)
const pakkeKort = document.querySelectorAll('.card');

// Find det felt hvor teksten skal stå i - højre boks
const pakkeFelter = document.querySelectorAll('#valg1');

// Vi gemmer den valgte pakke i et objekt så den kan genbruges i alle steps
const pakkeState = {
    label: "Ingen reolleje valgt",
    pris: 0
};

// Funktion: opdaterer alle højre bokse med valgt pakke
function opdaterPakkeVisning() {
    pakkeFelter.forEach(felt => {
        felt.textContent = pakkeState.label;
    });
}


// Gennemgå hvert kort og giv både .btn OG #btn klik-event
pakkeKort.forEach(kort => {

    // Find *både* .btn OG #btn inde i kort
    const knapper = kort.querySelectorAll(".btn, #btn");

    // Hvis der ikke er knapper, gå videre
    if (!knapper.length) return;

    knapper.forEach(btn => {

        // Man tilføjer et klik-event til knappen 
        btn.addEventListener("click", () => {

            // Vi sørger for at kun et kort er markeret som aktivt
            pakkeKort.forEach(k => k.classList.remove("aktiv"));

            // Tilføj aktiv styling til det valgte kort
            kort.classList.add("aktiv");

            // Vi finder den tekst der skal stå i den brune boks
            const valgtTekst =
                btn.dataset.selected ||
                kort.querySelector("h2").textContent.trim();

            // Gemmer den vaglte tekst så den kan genbruges
            pakkeState.label = valgtTekst;

            // Opdater teksten i alle steps fra 1-6
            opdaterPakkeVisning();
        });
    });
});




// STEP 2 – VÆLG LEJEPERIODE 

// Find alle periodekort
const kort1 = document.querySelectorAll(".kort1");

// Find alle felter der skal vise perioden i højre boks
const periodeFelter = document.querySelectorAll("#valg2");

// Find prisfeltet i den brune boks
const prisFelter = document.querySelectorAll("#beloeb");

// Find knappen der fører videre til næste sektion
const knap1 = document.querySelector("#knap1");

// Find næste sektion (kalender)
const kalender = document.getElementById("baggrundscirkel3");


// Klik på en periode
kort1.forEach(kort => {

    kort.addEventListener("click", () => {

        // Fjern aktiv styling fra alle kort
        kort1.forEach(el => el.classList.remove("aktiv"));

        // Marker den valgte som aktiv
        kort.classList.add("aktiv");

        // Hent periode-tekst (f.eks. "4 uger")
        const periodeTekst = kort.querySelector("h2").textContent;

        // Skriv perioden i ALLE højre bokse
        periodeFelter.forEach(felt => {
            felt.textContent = periodeTekst;
        });

        // Hent prisen (fx "675,-")
        const prisTekst = kort.querySelector(".pris").textContent;
        const tal = prisTekst.match(/\d+/g);
        const pris = tal ? Number(tal.join("")) : 0;

        // Skriv pris i ALLE prisfelter
        prisFelter.forEach(felt => {
            felt.textContent = pris + " kr.";
        });
    });
});

// Klik på knap1 → scroll til næste sektion
knap1.addEventListener("click", () => {

    kalender.scrollIntoView({ behavior: "smooth" });
});




// ---------------------------------------------------
// STEP 3 – KALENDER: MÅNEDER + DATO-VALG
// ---------------------------------------------------

// Titel (fx "DECEMBER 2025")
const titel = document.getElementById("maanedTitel");

// Container til alle dage i kalenderen
const kalenderDage = document.querySelector(".kalender-dage");

// Pile til næste / forrige måned (kan være null på nogle sider)
const nextBtn = document.getElementById("januarmåned");
const prevBtn = document.getElementById("decembermåned");

// Find knappen
const knap2 = document.querySelector("#knap2");

// Find baggrundscirkel4 (sektion med stand)
const stand = document.getElementById("baggrundscirkel4");

// Felt i højre boks hvor startdato skal vises 
const datoFelter = document.querySelectorAll('#valg3');


// Hjælpefunktion: giv alle dage klik-events
function tilfoejDagEvents() {
    if (!kalenderDage) return;

    const dage = kalenderDage.querySelectorAll(".dag");

    dage.forEach(dag => {
        dag.addEventListener("click", () => {

            // Hvis dagen er optaget, gør ingenting
            if (dag.classList.contains("dag-optaget")) return;

            // Fjern "valgt-dag" fra alle dage
            dage.forEach(d => d.classList.remove("valgt-dag"));

            // Marker den valgte dag
            dag.classList.add("valgt-dag");

            // Lav tekst til den brune boks
            const [maanedNavn, aar] = (titel?.textContent || "").split(" ");
            const dagNr = dag.textContent.trim();

            const tekst = `Startdato: ${dagNr}. ${maanedNavn ? maanedNavn.toLowerCase() : ""} ${aar || ""}`.trim();

            // Skriv i dato-feltet i højre boks, hvis det findes
            if (datoFelter && datoFelter.length) {
    datoFelter.forEach(function(f){ f.textContent = tekst; });
}       

            });
    });
}


// Klik på knap2 → scroll til næste sektion (stand)
if (knap2 && stand) {
    knap2.addEventListener("click", () => {
        stand.scrollIntoView({ behavior: "smooth" });
    });
}

// --------------------------
//  MÅNED: DECEMBER 2025
// --------------------------
function visDecember() {
    if (!titel || !kalenderDage) return;

    titel.textContent = "DECEMBER 2025";

    kalenderDage.innerHTML = `
        <div class="dag dag-optaget">1</div>
        <div class="dag dag-optaget">2</div>
        <div class="dag dag-optaget">3</div>
        <div class="dag dag-optaget">4</div>
        <div class="dag dag-optaget">5</div>
        <div class="dag dag-optaget">6</div>
        <div class="dag dag-ledig">7</div>

        <div class="dag dag-ledig">8</div>
        <div class="dag dag-ledig">9</div>
        <div class="dag dag-ledig">10</div>
        <div class="dag dag-ledig">11</div>
        <div class="dag dag-ledig">12</div>
        <div class="dag dag-ledig">13</div>
        <div class="dag dag-optaget">14</div>

        <div class="dag dag-ledig">15</div>
        <div class="dag dag-ledig">16</div>
        <div class="dag dag-ledig">17</div>
        <div class="dag dag-ledig">18</div>
        <div class="dag dag-ledig">19</div>
        <div class="dag dag-ledig">20</div>
        <div class="dag dag-optaget">21</div>

        <div class="dag dag-ledig">22</div>
        <div class="dag dag-ledig">23</div>
        <div class="dag dag-optaget">24</div>
        <div class="dag dag-optaget">25</div>
        <div class="dag dag-optaget">26</div>
        <div class="dag dag-ledig">27</div>
        <div class="dag dag-ledig">28</div>

        <div class="dag dag-ledig">29</div>
        <div class="dag dag-ledig">30</div>
        <div class="dag dag-ledig">31</div>
    `;

    tilfoejDagEvents();
}


// --------------------------
//  MÅNED: JANUAR 2026
// --------------------------
function visJanuar() {
    if (!titel || !kalenderDage) return;

    titel.textContent = "JANUAR 2026";

    kalenderDage.innerHTML = `
        <div class="dag dag-optaget">1</div>
        <div class="dag dag-optaget">2</div>
        <div class="dag dag-optaget">3</div>
        <div class="dag dag-ledig">4</div>
        <div class="dag dag-ledig">5</div>
        <div class="dag dag-optaget">6</div>
        <div class="dag dag-ledig">7</div>

        <div class="dag dag-ledig">8</div>
        <div class="dag dag-optaget">9</div>
        <div class="dag dag-optaget">10</div>
        <div class="dag dag-optaget">11</div>
        <div class="dag dag-optaget">12</div>
        <div class="dag dag-ledig">13</div>
        <div class="dag dag-ledig">14</div>

        <div class="dag dag-ledig">15</div>
        <div class="dag dag-ledig">16</div>
        <div class="dag dag-optaget">17</div>
        <div class="dag dag-optaget">18</div>
        <div class="dag dag-ledig">19</div>
        <div class="dag dag-ledig">20</div>
        <div class="dag dag-ledig">21</div>

        <div class="dag dag-ledig">22</div>
        <div class="dag dag-ledig">23</div>
        <div class="dag dag-optaget">24</div>
        <div class="dag dag-optaget">25</div>
        <div class="dag dag-optaget">26</div>
        <div class="dag dag-ledig">27</div>
        <div class="dag dag-ledig">28</div>

        <div class="dag dag-ledig">29</div>
        <div class="dag dag-ledig">30</div>
        <div class="dag dag-ledig">31</div>
    `;
    // Tilføj klik-events til de nyligt indsatte dage
    tilfoejDagEvents();
}

// tilføj event listeners til pilene
if (nextBtn) nextBtn.addEventListener('click', () => {
  visJanuar();
});
if (prevBtn) prevBtn.addEventListener('click', () => {
  visDecember();
});

// DECEMBER vises som standard NÅR SIDEN ÅBNES
visDecember();


// --------------------------
//  Stand sektion - step 4
// --------------------------


// Find alle ledige stande (dem du kan klikke på)
const ledigeStande = document.querySelectorAll('.ledig');

// Hvor tallet skal skrives hen
const valg4Felter = document.querySelectorAll('#valg4');

// Find knappen
const knap3 = document.querySelector("#knap3");

// Find baggrundscirkel5 (sektion med tilkøb)
const tilkobSektion = document.getElementById("baggrundscirkel5");


// Klik på en stand
ledigeStande.forEach(function(stand) {

    stand.addEventListener('click', function() {

        // Find tallet
        const tekst = this.textContent;
        const fundneTal = tekst.match(/\d+/g);
        const renTal = fundneTal ? fundneTal.join("") : "";

        // Sæt teksten i ALLE valg4 felter
        valg4Felter.forEach(function(felt) {
            felt.textContent = "Valgt stand: " + renTal;
        });

        // Vis visuelt valgt stand
        ledigeStande.forEach(function(s) {
            s.classList.remove('valgt');
        });
        this.classList.add('valgt');
    });
});



// Klik på knap1 → scroll til næste sektion
knap3.addEventListener("click", () => {

    tilkobSektion.scrollIntoView({ behavior: "smooth" });
});



// --------------------------
//  Tilkøb sektion - step 5
// --------------------------

// Find alle kort i tilkøb
const kort = document.querySelectorAll('.kort');
const valg5 = document.getElementById('valg5');

// Find knap4
const knap4 = document.querySelector("#knap4");

// Find baggrundscirkel3 (sektion med tilkøb)
const oplysningsSektion = document.getElementById("container-oplysninger");

// Klik på kort
kort.forEach(k => {

    k.addEventListener('click', () => {

        const pris = k.querySelector('.pris').textContent;
        const tal = pris.match(/\d+/g);
        const renPris = tal ? tal.join("") : 0;

    // Sæt teksten i ALLE valg5 felter
    document.querySelectorAll('#valg5').forEach(felt => {
    felt.textContent = "Valg af tilkøb: " + renPris + " kr.";
});

        // Fjern valgt fra alle kort
        kort.forEach(kortEl => kortEl.classList.remove('valgtkort'));

        // Tilføj valgt til det kort du klikkede på
        k.classList.add('valgtkort');

        // --- læg tilkøbspris oven i den nuværende pris ---
        const nuvaerende = Number((prisFelter[0].textContent.match(/\d+/g) || ["0"]).join(""));
        const tilkoeb = Number(renPris) || 0;
        const nyTotal = nuvaerende + tilkoeb;

        // skriv ny total i alle brune bokse
        prisFelter.forEach(felt => {
        felt.textContent = nyTotal + " kr.";
        });
    });
});

// Klik på knap2 → scroll til næste sektion
knap4.addEventListener("click", () => {

    oplysningsSektion.scrollIntoView({ behavior: "smooth" });
});


// Klik på videre til betaling knap → fører dig videre til betalingssiden.
document.getElementById("betalingKnap").addEventListener("click", function() {
    window.location.href = "betaling.html";
});