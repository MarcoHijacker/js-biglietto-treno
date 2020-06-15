// Biglietteria Ferroviaria JS

// Benvenuto!
alert("Benvenuto nella Biglietteria Ferroviaria Online!");

// Richiesta km da percorrere all'utente:
var kmToGo = parseInt(prompt("Quanti KM devi percorrere?"), 10);
// Stamp nella tab maggiori informazioni
document.getElementById('kmtogo').innerHTML = kmToGo + " Km";

// Richiesta età utente:
var userAge = parseInt(prompt("Qual è la tua età?"), 10);
// Stamp nella tab maggiori informazioni
document.getElementById('userage').innerHTML = userAge + " anni";

// Area calcolo costo biglietto:

  // Costo per KM in euro
const ticketRate = 0.21;
  // Variabile costo finale biglietto
var ticketCost;
  // Variabile costo finale biglietto con 2 cifre decimali
var ticketCost2dec;

  // Scontistica 20% per minorenni
if (userAge < 18) {
  ticketCost = 0.8 * ticketRate * kmToGo;
  // Stamp nella tab maggiori informazioni
  document.getElementById('less18').innerHTML = "Sì";

  // Scontistica 40% per over 65
} else if (userAge > 65) {
  ticketCost = 0.6 * ticketRate * kmToGo;
  // Stamp nella tab maggiori informazioni
  document.getElementById('oldies').innerHTML = "Sì";

  // Tariffazione default
} else {
  ticketCost = ticketRate * kmToGo;
  // Stamp nella tab maggiori informazioni
  document.getElementById('classicrate').innerHTML = "Sì";
}

// Arrotondamento a 2 cifre decimali per il prezzo finale biglietto
ticketCost2dec = ticketCost.toFixed(2);

// Stampo nella pagina il costo finale del biglietto
document.getElementById('ticketcost').innerHTML = ticketCost2dec;
