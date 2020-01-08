// Chiedi all’utente il cognome,
var nomeUtente = prompt("Inserisci il tuo nome");
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

// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
 console.log(listaNomi.indexOf(nomeUtente ));
 var posizione = listaNomi.indexOf(nomeUtente );
 document.getElementById('posizione').innerHTML = posizione;
