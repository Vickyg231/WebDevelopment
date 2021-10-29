const userScore = 0;
const computerScore = 0;
const divRock = document.getElementById("r");
const divPaper = document.getElementById("p");
const divScissor = document.getElementById("s");
var usersChoice = "";
var computerChoice = "";
var winner = "";
var countR = 0;
var countP = 0;
var countS = 0;
var playerR = 5;
var playerP = 5;
var playerS = 5;
var computerR = 5;
var computerP = 5;
var computerS = 5;
var count = 0;
var tie = 0;
var use = true;

function start()
{
   document.location.href="homePage.html";
}

//Randomizing the Computer Choice
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

//Array to store the images used 
var images = ["https://www.clipartkey.com/mpngs/m/7-77706_computer-clip-art-rockpaperscissors-rock-paper-scissors-images.png","https://pp.netclipart.com/pp/s/57-579200_danahand-paper-rock-paper-scissors-png.png","https://tse3.mm.bing.net/th/id/OIP.p4vopw2Z14Xrxohvh0s81AHaFh?pid=ImgDet&rs=1"]


//It is currently delayed 
function updateImage()
{
  if (usersChoice == "r")
  {
    document.getElementById("pChoice").src = images[0];
  }

  if (usersChoice == "p")
  {
    document.getElementById("pChoice").src = images[1];
  }

  if (usersChoice == "s")
  {
    document.getElementById("pChoice").src = images[2];
    console.log("true");
  }

  if (computerChoice == "r")
  {
    document.getElementById("cChoice").src = images[0];
  }

  if (computerChoice == "p")
  {
    document.getElementById("cChoice").src = images[1];
  }

  if (computerChoice == "s")
  {
    document.getElementById("cChoice").src = images[2];
  }
}

//Update the Computer consule when it wins
function winnerC(userChoice, computerChoice)
{
  if ((playerR!=0)&&(userChoice == "r"))
  {
    playerR--;
    computerR++;
    document.getElementById("playerRock").innerHTML = playerR;
    document.getElementById("computerRock").innerHTML = computerR;
  }

  if ((playerP!=0)&&(userChoice == "p"))
  {
    playerP--;
    computerP++;
    document.getElementById("playerPaper").innerHTML = playerP;
    document.getElementById("computerPaper").innerHTML = computerP;
  }

  if ((playerS!=0)&&(userChoice == "s"))
  {
    playerS--;
    computerS++;
    document.getElementById("playerScissor").innerHTML = playerS;
    document.getElementById("computerScissor").innerHTML = computerS;
  }
}

//Update the Player Consule when they win
function winnerP(userChoice, computerChoice)
{
  if ((computerR!=0)&&(userChoice == "r"))
  {
    playerR++;
    computerR--;
    document.getElementById("playerRock").innerHTML = playerR;
    document.getElementById("computerRock").innerHTML = computerR;
  }

  if ((computerP!=0)&&(userChoice == "p"))
  {
    playerP++;
    computerP--;
    document.getElementById("playerPaper").innerHTML = playerP;
    document.getElementById("computerPaper").innerHTML = computerP;
  }

  if ((computerS)&&(userChoice == "s"))
  {
    playerS++;
    computerS--;
    document.getElementById("playerScissor").innerHTML = playerS;
    document.getElementById("computerScissor").innerHTML = computerS;
  }
}

//Getting Player's Choice and comparing it to the Computer's Choice
function game(userChoice) {
  usersChoice = userChoice;
  computerChoice = getComputerChoice();
  updateImage();
  
  //Checking to make sure that the computer can't use a tool if it is at zero 
  if ((computerR == 0)&&(computerChoice == "r"))
  {
    use = false;
    while(use == false)
    {
      computerChoice = getComputerChoice();
      if (computerChoice!= "r")
      {
        use = true;
      }
    }
  }

  if ((computerS == 0)&&(computerChoice == "s"))
  {
    use = false;
    while(use == false)
    {
      computerChoice = getComputerChoice();
      if (computerChoice!= "s")
      {
        use = true;
      }
    }
  }

  if ((computerP == 0)&&(computerChoice == "p"))
  {
    computerChoice = getComputerChoice();
    if (computerChoice!= "p")
    {
      use = true;
    }
  }

  //Add if the game is finished 
  if ((playerR==0)&&(playerS==0)&&(playerP==0))
  {
    document.getElementById("battle").innerHTML = "Computer wins all";
    //Redirects to that page so they can only restart.
    document.location.href="restart.html";
  }

  if ((computerR==0)&&(computerP==0)(computerS==0))
  {
    document.getElementById("battle").innerHTML = "Player wins all";
    //Redirects to that page so they can only restart.
    document.location.href="restart.html";
  }

  //General Checks of who wins the game 
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      winner = "Player";
      tie = 0;
      document.getElementById("battle").innerHTML = "Player Wins";
      winnerP(userChoice,computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      winner = "Computer";
      tie = 0;
      document.getElementById("battle").innerHTML = "Computer Wins";
      winnerC(userChoice,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      winner = "Draw";
      //Enhancement: If they score three ties, a random weapon will be removed. 
      tie++;
      if (tie == 3)
      {
        var randomNum = Math.floor(Math.random() * 3);
        if (randomNum == 1)
        {
          playerR--;
          document.getElementById("playerRock").innerHTML = playerR;
          computerS--;
          document.getElementById("computerScissor").innerHTML = computerS;

        }
        if (randomNum == 2)
        {
          playerP--;
          document.getElementById("playerPaper").innerHTML = playerP;
          computerP--;
          document.getElementById("computerPaper").innerHTML = computerP;

        }

        if (randomNum == 3)
        {
          playerS--;
          document.getElementById("playerScissor").innerHTML = playerS;
          computerR--;
          document.getElementById("computerRock").innerHTML = computerR;
        }
      }
      document.getElementById("battle").innerHTML = "It's a draw";
      break;
  }
}


  //The functions in which the JS know what the Player picked 
    divRock.addEventListener('click', function () {
    if (playerR == 0)
    {
      return  document.getElementById("noMore").innerHTML = "You ran out of rocks, please pick something else";
    }
    else 
    {
      countP = 0;
      countS = 0;
      countR++;
      if ((countR == 3)&&(countP == 0)&&(countS == 0))
      {
        playerR--;
        document.getElementById("playerRock").innerHTML = playerR;
      }
      game("r");
      data();
    }
    })

  divScissor.addEventListener('click', function () {
    if (playerS == 0)
    {
      return document.getElementById("noMore").innerHTML = "You ran out of scissors, please pick something else";
    }
    else 
    {
      countP = 0;
      countR = 0;
      countS++;
      if ((countS == 3)&&(countP == 0)&&(countR == 0))
      {
        playerS--;
        document.getElementById("playerScissor").innerHTML = playerS;
      }
      game("s");
      data();
    }
  })

  divPaper.addEventListener('click', function () {
    if (playerP == 0)
    {
      return document.getElementById("noMore").innerHTML = "You ran out of papers, please pick something else";
    }
    else
    {
      countR = 0;
      countS = 0;
      countP++;
      if ((countP == 3)&&(countR == 0)&&(countS == 0))
      {
        playerP--;
        document.getElementById("playerPaper").innerHTML = playerP;
      }
      game("p");
      data();
    }
  })


//Data Table of the results 
function data() {
  dataTable = document.getElementById("finalData");
  var newRow = dataTable.insertRow();
  var newCell = newRow.insertCell();
  newCell.innerHTML = usersChoice;
  newCell = newRow.insertCell();
  newCell.innerHTML = computerChoice;
  newCell = newRow.insertCell();
  newCell.innerHTML = winner;
  count++;
}

//Reset the game

function reset()
{
  usersChoice = "";
  computerChoice = "";
  winner = "";
  countR = 0;
  countP = 0;
  countS = 0;
  playerR = 5;
  playerP = 5;
  playerS = 5;
  computerR = 5;
  computerP = 5;
  computerS = 5;
  document.getElementById("playerRock").innerHTML = playerR;
  document.getElementById("playerPaper").innerHTML = playerP;
  document.getElementById("playerScissor").innerHTML = playerS;
  document.getElementById("computerRock").innerHTML = computerR;
  document.getElementById("computerPaper").innerHTML = computerP;
  document.getElementById("computerScissor").innerHTML = computerS;
  while(count>1)
  {
    document.getElementById("finalData").deleteRow(2);
  }
  use = true;

}
