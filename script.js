// Chiedi all’utente il cognome,
var nomeUtente = prompt("Inserisci il tuo nome");
// inseriscilo in un array con altri cognomi,
listaNomi = ["marco","andrea","fabio","ludovico","giovanni","paolo","roberto"];
listaNomi.push(nomeUtente);
console.log(listaNomi);

// stampa la lista ordinata alfabeticamente (in html ul > li).
listaNomi.sort();
console.log(listaNomi);
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
console.log(listaNomi.indexOf(nomeUtente));
