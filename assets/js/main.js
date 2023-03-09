/* 
Descrizione:
scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

/* 
TOOLS
- value
- switch / case
- querySelector / getElementById
- addEventListener
- fuction()
- classList
*/

const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset");
const userName = document.getElementById("name_surname");
const km = document.getElementById("km");
const age = document.getElementById("age");
const ticketPreviewEl = document.getElementById("ticket_preview");

// GENERATE FUNCTION
generateBtn.addEventListener('click', function() {
  // CHECK IF EVERY INPUT IS FILLED
  if (userName == "" || Number(km.value) == 0) {
    alert("ERRORE. Tutti i campi devono essere compilati correttamente");
    return;
  }

  const costPerKm = 0.21;
  let finalPrice = Number(km.value) * costPerKm;

  document.getElementById("ticket_preview_offer_type").innerText = "Biglietto Standard";

  switch (age.value) {
    case "minorenne":
      finalPrice *= 0.8;
      document.getElementById("ticket_preview_offer_type").innerText = "Biglietto Under 18";
      break;
    case "over65":
      finalPrice *= 0.6;
      document.getElementById("ticket_preview_offer_type").innerText = "Biglietto Over 65";
      break;
  }

  document.getElementById("ticket_preview_passenger_name").innerText = userName.value;
  document.getElementById("ticket_preview_kms").innerText = km.value;

  // MAX 20 TRAIN CARRIAGE
  document.getElementById("ticket_preview_train_carriage").innerText = Math.floor(Math.random() * 20) + 1;

  // 5 DIGITS INTEGER NUMBER NEVER STARTING WITH 0
  document.getElementById("ticket_preview_cp_code").innerText = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

  document.getElementById("ticket_preview_ticket_cost").innerText = `${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`;

  // SHOWS THE TICKET PREVIEW BY REMOVING BOOTSTRAP CLASS D-NONE
  ticketPreviewEl.classList.remove("d-none");

  // RESETS THE FORM ALSO ON GENERATE
  userName.value = "";
  km.value = "";
  age.value = "maggiorenne";
})

// RESET FUNCTION
resetBtn.addEventListener('click', function() {
  ticketPreviewEl.classList.add("d-none");
  userName.value = "";
  km.value = "";
  age.value = "maggiorenne";
})