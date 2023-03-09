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
  const km = Number(document.getElementById("km").value);
  const age = document.getElementById("age").value;
  const costPerKm = 0.21;
  let finalPrice = km * costPerKm;

  switch (age) {
    case "minorenne":
      finalPrice *= 0.8;
      console.log(`Prezzo minorenne: ${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`);
      break;
    case "over65":
      finalPrice *= 0.6;
      console.log(`Prezzo over 65: ${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`);
      break;
    default:
      console.log(`Prezzo maggiorenne: ${(Math.round(finalPrice * 100) / 100).toFixed(2)}€`);
  }

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