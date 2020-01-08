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
while (i < listaNomi.length ) {
  document.getElementById('lista-nomi').innerHTML += "<li>" + listaNomi[i] + "</li>"
  i++
}

// Scrivi anche la posizione della lista in cui il nuovo utente si trova.

 var posizione = listaNomi.indexOf(nomeUtente ) + 1;
 document.getElementById('posizione').innerHTML = posizione;
var boolean = listaNomi.includes("marco");
console.log(boolean);
// creo 2 for annidati per far fare lo spelling dei nomi e trovare quelli che contengono la g
for (var i = 0; i < listaNomi.length; i++) {
  spelling = listaNomi[i]
  for (var k = 0; k < spelling.length; k++) {
    spelling[k]
    console.log(spelling[k]);
    if (spelling[k] == "g") {
      console.log(spelling);
      var nomeConG = spelling
      document.getElementById('lista-nomi').innerHTML += "<li>" + nomeConG + "</li>"

    }
  }
}

// stampo i nomi che sono minori di 8 lettere 
for (var i = 0; i <= listaNomi.length - 1; i++){
  if (listaNomi[i].length<8) {
    document.getElementById('lista-nomi').innerHTML += "<li>" + listaNomi[i] + "</li>"
  }
}
