// selecting elements
playerScore = document.getElementById("player-score");
cpuScore = document.getElementById("cpu-score");
result = document.getElementById("verdict");

playerSelected = document.getElementById("player-selection");
CPUSelected = document.getElementById("cpu-selection");

modal = document.getElementById("modal");
overlay = document.getElementById("black-overlay");

// function to open help / modal
function info()
{
    modal.style.transform = "scale(1)";
    overlay.style.transform = "scale(1)";
}

// function to close modal
function closeModal()
{
    modal.style.transform = "scale(0)";
    overlay.style.transform = "scale(0)";
}

// function to show cpu victory
function cpuWin()
{
    cpuScore.innerText -= -1;
    result.innerText = "CPU Win";
}
// function to show player victory
function playerWin()
{
    playerScore.innerText -= -1;
    result.innerText = "You Win";
}

// function to select element
function select(playerSelection)
{
    cpuSelection = Math.floor(Math.random() * 3);
    console.log(playerSelection+":"+cpuSelection)
    playerSelected.style.backgroundImage = "url(Images/" + playerSelection + ".png)";
    CPUSelected.style.backgroundImage = "url(Images/" + cpuSelection + ".png)";

    if (playerSelection == cpuSelection)
        result.innerText = "Draw";
    else if (playerSelection == 0)
    {
        if (cpuSelection == 1)
            cpuWin();
        else
            playerWin();
    }
    else if (playerSelection == 1)
    {
        if (cpuSelection == 2)
            cpuWin();
        else
            playerWin();
    }
    else
    {
        if (cpuSelection == 0)
            cpuWin();
        else
            playerWin();
    }
}