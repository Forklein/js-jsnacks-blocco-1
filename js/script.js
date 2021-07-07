console.log('Ciao Peppe!');

/*
SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
se è dispari stampa il numero successivo.
SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi
e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
SNACK 4: Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

//! SNACK 1
/* 
1)Chiedere all'utente di inserire un numero per 5 Volte.
2)Creare una variabile somma e porla = 0.
3)Stampare la somma di tutti i numeri.
4)Utilizzare sia for che while.
*/

/* var number;
var somma = 0;

//? For solution
for (var i = 1; i <= 5; i++) {
    number = parseInt(prompt('Inserisci il ' + i + ' numero'));
    somma += number;
}
//? While solution
var i = 1;
while (i <= 5) {
    number = parseInt(prompt('Inserisci il ' + i + ' numero'));
    somma += number;
    i++;
}
console.log(somma); */

//! SNACK 2
/*
1)Chiedere all'utente un numero
2)Verificare se pari o dispari con modulo
3)Quando è pari stampa il numero inserito altrimenti se dispari stampa lo stesso numero + 1
*/

/* var number = parseInt(prompt('Inserisci un numero:'));
if (number % 2 === 0) {
    console.log(number);
} else {
    console.log(number + 1);
} */

//! SNACK 3

/*
1)Creare due array contenti nomi e cognomi
2)Creare un array vuoto che sarà la fakelist
3)Crare due variabili contente l'index random per entrambi gli array
4)Tenere presente che l'array fake deve essere di 3 elementi
5)Creare variabile contente un nome random e un cognome random
6)Impostare una condizione e pushare gli elementi random nell'array
*/

var nameList = ['Lorenzo', 'Matteo', 'Giuseppe', 'Alberto', 'Emanuele', 'Vincenzo', 'Saverio', 'Nicola', 'Marco', 'Ercole'];
var surnameList = ['Pisani', 'Moretti', 'Mascolo', 'Pucello', 'De Pasquale', 'Caramia', 'Montenegro', 'Lillo', 'Tropiano', 'Barletta'];
var fakelist = [];
var fakeuser;

while (fakelist.length < 10) {
    var randomNameList = nameList[Math.floor(Math.random() * nameList.length)];
    var randomsurnameList = surnameList[Math.floor(Math.random() * surnameList.length)];
    fakeuser = randomNameList + " " + randomsurnameList;
    if (!fakelist.includes(fakeuser)) {
        fakelist.push(fakeuser);
    }
}

console.table(fakelist)

