// ************************************   Campominato

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua
// chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo
// possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente
// ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50


// Creo la variabile dell'elemento
var bombe = document.getElementById('bombe');
var numeriScelti = document.getElementById('numeriScelti');

// Chiedo all'utente di scegliere la difficoltà del gioco
var difficolta = parseInt(prompt('Scegli il livello di difficoltà : ( 0 => 16 bombe su 100 numeri, 1 => 16 bombe su 80 numeri, 2 => 16 bombe su 50 numeri )'));
while (isNaN(difficolta) || difficolta >= 3) {
  difficolta = parseInt(prompt('Errore.Scegli il livello di difficoltà : ( 0 => 16 bombe su 100 numeri, 1 => 16 bombe su 80 numeri, 2 => 16 bombe su 50 numeri )'));
}
switch (difficolta) {
  case 1:
    var difficoltaScelta = 80;
    break;
  case 2:
    difficoltaScelta = 50;
    break;
  default:
    difficoltaScelta = 100;
}

// Creo array dei 16 numeri bomba casuali da 1 a 100
var arrayBombe = generaArray(1, 16);

// Chiedo il numero all'utente e controllo se è presente o no tra le bombe
var resultGame = userNumbers(difficoltaScelta, arrayBombe)

// Mostro il risultato all'utente e i numeri bomba
if (resultGame) {
  numeriScelti.innerHTML = 'Hai perso, sei esploso con il numero ' + resultGame;
} else {
  numeriScelti.innerHTML = 'Hai vinto in ' + difficoltaScelta + ' mosse';
}
bombe.innerHTML = arrayBombe;
