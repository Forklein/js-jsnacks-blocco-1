/* SNACK: /
1. Creare un oggetto palla che abbia le seguenti proprietà.
  Nome = palla
  Peso = 10
2. stampare la palla in pagina*
3. Attraverso un prompt dare la possibilità all’utente di modificare il peso
della palla., poi stampare la palla con il peso modificato
BONUS: stampare la palla tramite una funzione */

var resultDisplay = document.getElementById('result');
var result = "";

var ball = {
    Nome: 'Palla',
    Peso: 10
}

for (var key in ball) {
    currentElement = ball[key];
    result += '<li>';
    result += key + ': ' + currentElement;
    result += '</li>';
}

resultDisplay.innerHTML = result;

/* SNACK : Invece di modificare il peso con un prompt, proviamo a farlo con un input.
Avremo bisogno di un bottone... */

var btn = document.getElementById('edit');
btn.addEventListener('click', function () {
    var inputField = document.getElementById('weight').value;
    ball.Peso = inputField;
    printObjectInPage(ball, resultDisplay);

})

// Function to print in page object prop
function printObjectInPage(object, htmlElement) {
    var result = "";
    for (var key in object) {
        currentItem = object[key];
        result += '<li>';
        result += key + ': ' + currentItem;
        result += '</li>';
    }
    htmlElement.innerHTML = result;
}


/* SNACK: Creiamo un array di oggetti contenente 3 squadre di calcio con proprietà
 "nome", "città" "punti";
Stampiamo le squadre in pagina, all'interno di una tabella HTML */

var tableDisplay = document.getElementById('table-body');
var success = '';

var team = [
    {
        name: "Inter",
        city: "Milano",
        points: 85,
    },
    {
        name: "Juventus",
        city: "Torino",
        points: 70,
    },
    {
        name: "Lazio",
        city: "Roma",
        points: 60,
    },
]

for (var i = 0; i < team.length; i++) {
    var currentTeam = team[i];
    success += '<tr>';
    success += '<td>' + currentTeam.name + '</td>';
    success += '<td>' + currentTeam.city + '</td>';
    success += '<td>' + currentTeam.points + '</td>';
    success += '</tr>';
}

tableDisplay.innerHTML = success;