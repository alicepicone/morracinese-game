let cpuWin = 0;
let playerWin = 0;
const cpuText = document.querySelector(".par"); //cerca la classe par che è il paragrafo dell'html
const resultText = document.querySelector(".result");
const cpuImg = document.createElement("img");

createTitle();

function createTitle() {
    let title = document.createElement("h1"); // crea elemento h1 per il titolo
    title.classList.add("title");
    title.innerText = "MORRA CINESE"; //titolo
    document.querySelector(".tit").appendChild(title);
}

function play(player) {

    //setactive(player);

    let cpu = Math.floor(Math.random() * 3) + 1;
    let cpuChoice;

    if (cpu == 1) {
        cpuChoice = 'rock';
        cpuImg.src = "assets/img/rock.png"
    }
    else if (cpu == 2){
        cpuChoice = 'paper';
        cpuImg.src = "assets/img/paper.png"
    }
    else {
        cpuChoice = 'scissors';
        cpuImg.src = "assets/img/scissors.png"
    }

    cpuText.innerText = "Il computer ha scelto " + cpuChoice;
    document.querySelector(".cpu").appendChild(cpuImg);

    if (player == cpuChoice){
        //pareggio
        resultText.innerText = "Pareggio";
    }
    else {
        if (player == "rock"){
            if (cpuChoice == "paper"){
                //vince cpu
                resultText.innerText = "Computer VINCE";
                cpuWin++;
            }
            else {
                //vince player
                resultText.innerText = "Giocatore VINCE";
                playerWin++;
            }
        }
        else if (player == "paper"){
            if (cpuChoice == "scissors"){
                //vince cpu
                resultText.innerText = "Computer VINCE";
                cpuWin++;
            }
            else {
                //vince player
                resultText.innerText = "Giocatore VINCE";
                playerWin++;
            }
        }
        else { //equivalente del giocatore che sceglie forbici
            if (cpuChoice == "rock"){
                //vince cpu
                resultText.innerText = "Computer VINCE";
                cpuWin++;
            }
            else {
                //vince player
                resultText.innerText = "Giocatore VINCE";
                playerWin++;
            }
        }
    }

    document.querySelector(".cpuScore").innerText = cpuWin;
    document.querySelector(".playerScore").innerText = playerWin;
}

//per resettare il gioco 
function resetGame(){ 
    window.location.reload();
}
