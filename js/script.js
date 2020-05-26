// lista cognomi
var listaCognomi =  ['bianchi', 'rossi', 'duzioni', 'balsano', 'verdi'];

//chiedo all'utente qual è il suo cognome
var cognomeUtente = prompt('Qual è il tuo cognome?');
var presente = false;

// controlla se il nome sta nella lista
for (var i = 0; i < listaCognomi.length; i++) {
  if (cognomeUtente === listaCognomi[i]) {
    var presente = true;
  }
}

// inserisce il nuovo cognome  nella lista
if (presente === false) {
  listaCognomi.push(cognomeUtente);
} else {
  console.log('Cognome già presente');
}
// ordina alfabeticamente
listaCognomi.sort();

//indica la posizione del nuovo cognome aggiunto
console.log(listaCognomi);
console.log(listaCognomi.indexOf(cognomeUtente) + 1);
