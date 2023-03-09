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
const ticketPreviewEl = document.getElementById("ticket_preview");

// GENERATE FUNCTION
generateBtn.addEventListener('click', function() {
  const userName = document.getElementById("name_surname");
  const km = Number(document.getElementById("km").value);
  const age = document.getElementById("age").value;

  // CHECK IF EVERY INPUT IS FILLED
  if (userName == "" || km == 0) {
    alert("ERRORE. Tutti i campi devono essere compilati");
    return;
  }

  const costPerKm = 0.21;
  let finalPrice = km * costPerKm;

  document.getElementById("table_offer_type").innerText = "Biglietto Standard";

  switch (age) {
    case "minorenne":
      finalPrice *= 0.8;
      document.getElementById("table_offer_type").innerText = "Biglietto Under 18";
      break;
    case "over65":
      finalPrice *= 0.6;
      document.getElementById("table_offer_type").innerText = "Biglietto Over 65";
      break;
  }

  document.getElementById("table_passenger_name").innerText = userName.value;
  document.getElementById("table_kms").innerText = km;

  // MAX 20 TRAIN CARRIAGE
  document.getElementById("table_train_carriage").innerText = Math.floor(Math.random() * 20) + 1;

  // 5 DIGITS INTEGER NUMBER NEVER STARTING WITH 0
  document.getElementById("table_cp_code").innerText = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

  document.getElementById("table_ticket_cost").innerText = `${finalPrice}€`;


  // SHOWS THE TICKET PREVIEW BY REMOVING BOOTSTRAP CLASS D-NONE
  ticketPreviewEl.classList.remove("d-none");
})


// RESET FUNCTION
resetBtn.addEventListener('click', function() {
  ticketPreviewEl.classList.add("d-none");
  document.getElementById("name_surname").value = "";
  km.value = "";
  age.value = "maggiorenne";
})