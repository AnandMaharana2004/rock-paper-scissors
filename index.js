let userScore = "0";
let compScore = "0";
let useDisplay = document.getElementById('user-score');
let computerDisplay = document.getElementById('comp-score');
let rockButton = document.getElementById('rock');
let paperBUtton = document.getElementById('paper');
let scissorButton = document.getElementById('scissor');
let displayComputerImage = document.getElementById('computerChoice');
let displayUserImage = document.getElementById('userChaice');
let elementDisply = document.getElementById('laterBorder');

function win(){
    userScore++;
    compScore = compScore;
    useDisplay.innerHTML = userScore;
    elementDisply.innerHTML = 'You win'
}

function lose(){
    compScore++;
    userScore = userScore;
    computerDisplay.innerHTML = compScore;
    elementDisply.innerHTML = 'You lose'
}

function draw(){
}

function game(userChoice){
    const computer_Choices = computerChoices();
    console.log('user choice  =  ' + userChoice);
    console.log('the computer choice  = ' + computer_Choices);
    elementDisply.innerHTML = "It's a draw"
    
    switch( userChoice + computer_Choices){
        case "rs": 
        case "pr": 
        case "sp":
            win();
            break;     
        case "rp":
        case "sr":
        case "ps":
            lose(); 
            break;    
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }

function computer_Choices_images(){

    if(computer_Choices == 'p'){
        displayComputerImage.style.backgroundImage = "url(/images/paper.png)";
    }
    else if(computer_Choices == 'r'){
        displayComputerImage.style.backgroundImage = "url(/images/rock.png)";
    }
    else if(computer_Choices == 's'){
        displayComputerImage.style.backgroundImage = "url(/images/scissors.png)";
    }
}

function user_choices_images(){
    if(userChoice == 'p'){
        displayUserImage.style.backgroundImage = "url(/images/paper.png)";
    }
    else if(userChoice == 'r'){
        displayUserImage.style.backgroundImage = "url(/images/rock.png)";
    }
    else if(userChoice == 's'){
        displayUserImage.style.backgroundImage = "url(/images/scissors.png)";
    }
}

user_choices_images();
computer_Choices_images();
    console.log('the user score is : ' + userScore);
    console.log('the computer score  is : ' + compScore);
}

function main(){
    rockButton.addEventListener('click', function(){
        game("r");
    })
    paperBUtton.addEventListener('click', function(){
        game("p");
    })
    scissorButton.addEventListener('click', function(){
        game("s");
    });
}

main();
function computerChoices(){
    const choices = ['r','p','s'];
    const randomNumber =Math.floor( Math.random() *3);
    return choices[randomNumber];
}
