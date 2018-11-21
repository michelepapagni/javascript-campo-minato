// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a
// 100 alla volta, se il numero è presente nella lista dei numeri
// generati, la partita termina, altrimenti continua chiedendo
// all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.
// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con
// difficoltà 2=> da 1 a 50

function getRandomNumber(min, max)
{
    var newRandomNumber = Math.floor(Math.random()*(max-min+1)+min);

    return newRandomNumber;
}

//Voglio cercare un elemento in un array.
function checkNumber(array, element)
{
    var trovato = false;

    for (var i = 0; i < array.length; i++)
    {
        if (array[i] == element)
        {
            trovato = true;
        }
    }

    return trovato;
}

var bombe = [];

//che il nostro while deve continuare fino a quando ho 16 numeri nell'array bombe.
while (bombe.length < 16)
{
    //generare un nuovo numero
    var newCpuNumber = getRandomNumber(1, 100);

    //controllare se il numero appena generato è presente nell'array
    if (bombe.includes(newCpuNumber) == false) {
        bombe.push(newCpuNumber);
    }
}

console.log(bombe);

// var userNumber = parseInt(prompt('Inserisci un numero'));
// var isTrovato = checkNumber(bombe, userNumber);
//
// if (isTrovato == true) {
//     document.writeln('Hai perso');
// }
// else {
//     document.writeln('Hai vinto');
// }

// ci creiamo una variabile continua a giocare che all'inizio sarà uguale a true
// questa variabile diventerà false quando: o hai fatto 84 giocate oppure hai trovato una bomba.
// Fino a quel momento, continua a chiedere numeri all'utente e verificare che quei numeri non siano bombe.
var continuaAGiocare = true;
var giocateVittoriose = 0;
var numeriUtente = [];

while (continuaAGiocare == true)
{
    var userNumber = parseInt(prompt('Inserisci un numero'));
    var isTrovatoTraINumeriUtente = checkNumber(numeriUtente, userNumber);
    var isTrovatoTraLeBombe = checkNumber(bombe, userNumber);

    if (isTrovatoTraINumeriUtente == true)
    {
        alert('Inserisci un numero valido');
    }
    else {
        numeriUtente.push(userNumber);

        if (isTrovatoTraLeBombe == true)
        {
            continuaAGiocare = false;
        }
        else {
            giocateVittoriose = giocateVittoriose + 1;

            if (giocateVittoriose >= 84)
            {
                continuaAGiocare = false;
            }
        }
    }
}

//dobbiamo comunicare all'utente se ha vinto o se ha perso. E se ha perso, quante giocate vittoriose ha fatto.
if (giocateVittoriose == 84)
{
    alert('hai vinto');
}
else {
    alert('hai perso ma hai totalizzato: ' + giocateVittoriose + ' giocate vittoriose');
}
