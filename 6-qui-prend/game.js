
var players = [];
var nbGame = 1;

document.getElementById("start").onclick = function() {

document.getElementById("players").style.opacity = 0;

setTimeout(() => {

for (i = 1; i <= nbPlayers; i++) {
    players.push(66);
}

const table = document.createElement("table");
table.id = "table";

const playersTR = document.createElement("tr");

const firstTD = document.createElement("td");
firstTD.textContent = "";
firstTD.id = "firstColumn";
firstTD.style.opacity = 0;
playersTR.appendChild(firstTD);

for (i = 1; i <= players.length; i++) {
    const td = document.createElement("td");
    td.textContent = document.getElementById("player" + i).value;
    td.style.fontWeight = "bold";
    playersTR.appendChild(td);
}
document.getElementById("players").remove();

table.appendChild(playersTR);

const firstGame = document.createElement("tr");

const firstNB = document.createElement("td");
firstNB.textContent = "1";
firstNB.id = "firstColumn";
firstGame.appendChild(firstNB);

for (i = 1; i <= players.length; i++) {
    const td = document.createElement("td");
    const input = document.createElement("input");
    input.id = "player" + i + "_game1";
    input.placeholder = "66";
    input.className = "scoreTD";
    input.type = "number";
    td.appendChild(input);
    firstGame.appendChild(td);
}

table.appendChild(firstGame);

document.getElementById("game").appendChild(table);

const button = document.createElement("a");
button.textContent = "Prochaine manche";
button.className = "next_button";
button.id = "next";
button.href = "#";
button.onclick = function(){next()};
document.getElementById("game").appendChild(document.createElement("p"));
document.getElementById("game").appendChild(button);

document.getElementById("game").style.opacity = 1;

}, 750);

}

function next() {

for (i = 1; i <= nbPlayers; i++) {
    const value = document.getElementById("player" + i + "_game" + nbGame).value;
    if (value == "" || isNaN(parseInt(value))) {
        alert("Mauvaises informations entrées")
        return;
    }
    players[i-1] -= parseInt(value);
}

nbGame ++;

finish = "input";
for (i = 0; i < players.length; i++) {
    if (players[i] <= 0) {
        finish = "b";
        try {
            document.getElementById("next").remove();
            for (j = 1; j < nbGame; j++) {
                for (l = 1; l <= players.length; l++) {
                    const element = document.getElementById("player" + l + "_game" + j);
                    const newElement = document.createElement("i");
                    newElement.innerHTML = element.innerHTML;
                    newElement.textContent = element.placeholder;
                    element.parentNode.replaceChild(newElement, element);
                }
            }
        } catch(e) {}
    }
}

const actualGame = document.createElement("tr");

const gameNB = document.createElement("td");
gameNB.textContent = nbGame;
gameNB.id = "firstColumn";
actualGame.appendChild(gameNB);

for (i = 1; i <= players.length; i++) {
    const td = document.createElement("td");
    const input = document.createElement(finish);
    input.id = "player" + i + "_game" + nbGame;
    if (finish == "b")
        input.textContent = players[i-1];
    else
        input.placeholder = players[i-1];
    input.className = "scoreTD";
    input.type = "number";
    td.appendChild(input);
    actualGame.appendChild(td);
}

document.getElementById("table").appendChild(actualGame);

}
