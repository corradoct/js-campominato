// Funzione che crea un array di numeri non inserendo i numeri doppi.
// Accetta come argomenti il numero minimo e il numero massimo (inclusi) del range.
// Ritorna un array.

function generaArray (min, max) {
  var arrayBomb = [];
  var i = min;
  while (i <= max) {
    var numeroRandomBomb = generaNumeroIntero(1, 100);
    if (!(arrayBomb.includes(numeroRandomBomb))) {
      arrayBomb.push(numeroRandomBomb);
      i++;
    }
  }
  return arrayBomb;
}

// Funzione che genera un numero intero random entro un range.
// Accetta come argomenti il numero minimo del range e il numero massimo del range,
// entrambi inclusi.
// Ritorna il numero generato.

function generaNumeroIntero(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Funzione che crea un array di numeri scelti dall'utente, controllandoli uno ad uno
// per vedere se sono gia presenti nell'array delle bombe.
// Prende come argomento la difficoltà scelta dall'utente e quindi aumenta o diminuisce
// la probabilità di trovare una bomba.
// Ritorna false se il numero scelto dall'utente non corrisponde ad una bomba,
// altrimenti ritorna true e il numero stesso che corrisponde alla bomba.

function userNumbers(difficulty) {
  var arrayNumeriUtente = [];
  var controlloNumeroUtente = false;
  var i = 0;
  while (controlloNumeroUtente === false && i < difficulty) {
    var numeroUtente = parseInt(prompt('Hai scelto la difficoltà con ' + difficulty + ' numeri. Inserisci un numero da 1 a 100. Rimangono ' + (difficulty - i) + ' numeri'));
    while (isNaN(numeroUtente) || numeroUtente > 100 || numeroUtente <= 0 || arrayNumeriUtente.includes(numeroUtente)) {
      numeroUtente = parseInt(prompt('Errore.Inserisci un numero da 1 a 100'));
    }
    if (arrayBombe.includes(numeroUtente)) {
      controlloNumeroUtente = true;
      return numeroUtente;
    } else {
      arrayNumeriUtente.push(numeroUtente);
      i++;
    }
  }
  return controlloNumeroUtente;
}
