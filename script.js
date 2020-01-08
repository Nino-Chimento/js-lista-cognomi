// Chiedi all’utente il cognome,
var nomeUtente = prompt("Inserisci il tuo nome");
while (nomeUtente.length <= 0 ) {
  nomeUtente = prompt("Inserisci il tuo nome");
}
// inseriscilo in un array con altri cognomi,
listaNomi = ["marco","andrea","fabio","ludovico","giovanni","paolo","roberto"];
listaNomi.push(nomeUtente);
console.log(listaNomi);

// stampa la lista ordinata alfabeticamente (in html ul > li).
listaNomi.sort();
console.log(listaNomi);
for (var i = 0; i <= listaNomi.length - 1; i++) {
  document.getElementById('lista-nomi').innerHTML += "<li>" + listaNomi[i] + "</li>"
}
i = 0
while (i <= listaNomi.length ) {
  document.getElementById('lista-nomi').innerHTML += "<li>" + listaNomi[i] + "</li>"
  i++
}

// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
 console.log(listaNomi.indexOf(nomeUtente ));
 var posizione = listaNomi.indexOf(nomeUtente ) + 1;
 document.getElementById('posizione').innerHTML = posizione;
