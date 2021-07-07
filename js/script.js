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

var number;
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
console.log(somma);





