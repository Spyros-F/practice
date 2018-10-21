const getUserChoice = userInput =>{

  userInput = userInput.toLowerCase();

  if( userInput === 'rock'){

   	return userInput; 

  }else if( userInput ==='paper'){

    return userInput;

  }else if(userInput === 'scissors'){

    return userInput;

  }else if(userInput === 'bomb'){

    return userInput;

  }

  else{

    console.log('Not valid input!')

  }

};



function getComputerChoice(){

	var x=Math.floor(Math.random() * (3));

  switch(x){

    case 0:

      return 'rock';

    case 1:

      return 'paper';

    case 2:

      return 'scissors';

  }

}



function determineWinner(userChoice,computerChoice){

  if(userChoice === 'bomb'){

    return "You won with cheat code! ;) "

  }

  if( userChoice === computerChoice){

    return "The game was a tie!";

  }

  if(userChoice === 'rock'){

    if(computerChoice === 'paper'){

      return "computer won!";

    }else{

      return "you won!";

    }

  }

  if(userChoice === 'paper'){

    if(computerChoice === 'rock'){

      return "you won!";

    }else{

      return "computer won!";

    }

  }

}



function playGame(){

  const userChoice = getUserChoice('bomb');

  console.log('Your choice:' +userChoice);

  const computerChoice = getComputerChoice();

  console.log('Computers choice:' +computerChoice);

  console.log(determineWinner(userChoice,computerChoice));

}



playGame();
