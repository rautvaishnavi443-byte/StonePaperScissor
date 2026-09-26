var b = true;
export function changeMode() {

    if (b == true) {
        document.getElementById("emoji").innerHTML = "🌛"
        document.getElementById("body").style.backgroundImage = `url("Background-night.png")`;
        b = false;
    } else {
        document.getElementById("emoji").innerHTML = "🌞"
        b = true;
        document.getElementById("body").style.backgroundImage = `url("Background-day.png")`
}
}




var totalcount;
var myPts;
var compPts;
var mycount = document.getElementById("you");
var comp = document.getElementById("me");

function counts() {
    totalcount = prompt("Enter number of points:");
    myPts = 0;
    compPts = 0;
    console.log(totalcount);
    mycount.innerHTML = myPts + "/" + totalcount;
    comp.innerHTML = compPts + "/" + totalcount;
}

function start(x) {
    fetch("https://api.toys/api/rock_paper_scissors").then(data => {
        return data.json();
    }).then((data) => {
        var compChoice = data.cpu;
        console.log("Computer: " + compChoice);
        console.log("You: " + x);

        var win = document.getElementById("win-status");

        if (compChoice == 'paper' && x == 'scissors') {
            if (totalcount == null) {
                counts();
            }
            ++myPts;
            win.innerHTML = `You won!,Me:📜 & You:✂️`;
            mycount.innerHTML = myPts + "/" + totalcount;
            setTimeout(()=>{
                if (myPts == totalcount) {
                alert("Game Over, You Won!")
                counts();
                win.innerHTML = "You Start";
            }
            },2000);

        }
        else if (compChoice == 'paper' && x == 'rock') {
            if (totalcount == null) {
                counts();
            }
            ++compPts;
            win.innerHTML = `I won!,Me:📜 & You:🗿`;
            comp.innerHTML = compPts + "/" + totalcount;
            setTimeout(()=>{
                if (compPts == totalcount) {
                alert("Game Over, You lost!")
                counts();
                win.innerHTML = "You Start";
            }
            },2000)
        }
        else if (compChoice == 'rock' && x == 'scissors') {
            if (totalcount == null) {
                counts();
            }
            ++compPts;
            win.innerHTML = `I won!,Me:🗿 & You:✂️`
            comp.innerHTML = compPts + "/" + totalcount;
            setTimeout(()=>{
                if (compPts == totalcount) {
                alert("Game Over, You lost!")
                counts();
                win.innerHTML = "You Start";
            }
            },2000);
        }
        else if (compChoice == 'rock' && x == 'paper') {
            if (totalcount == null) {
                counts();
            }
            ++myPts;
            win.innerHTML = `You won!,Me:🗿 & You:📜`
            mycount.innerHTML = myPts + "/" + totalcount;
            setTimeout(()=>{
                if (myPts == totalcount) {
                alert("Game Over, You Won!")
                counts();
                win.innerHTML = "You Start";
            }
            },2000)
            

        }
        else if (compChoice == 'scissors' && x == 'paper') {
            if (totalcount == null) {
                counts();
            }
            ++compPts;
            win.innerHTML = `I won!,Me:✂️ & You:📜`
            comp.innerHTML = compPts + "/" + totalcount;
            setTimeout(()=>{
                if (compChoice == totalcount) {
                alert("Game Over, You lost!")
                counts();
                win.innerHTML = "You Start";
            }
            },2000);
        }
        else if (compChoice == 'scissors' && x == 'rock') {
            if (totalcount == null) {
                counts();
            }
            ++myPts;
            win.innerHTML = `You won!,Me:✂️ & You:🗿`
            mycount.innerHTML = myPts + "/" + totalcount;
            setTimeout(()=>{
                if (myPts == totalcount) {
                alert("Game Over, You Won!")
                counts();
                win.innerHTML = "You Start";
            }
            },2000);
            

        }
        else {
            if (totalcount == null) {
                counts();
            }
            win.innerHTML = `It's a Tie!🪢`
        }


    }).catch((e) => {
        console.log(e);
    })
}