        const container = document.querySelector('#game');
        const score = document.querySelector('#score');
        let flag = false;

        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                if (flag) return;  
                playerSelection = button.id;
                game();
            })
        })



        function Choice() {
            playerChoice = prompt('Rock, Paper or Scissors?');
        }

        function userSelection() {
            return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
        }


        function computerPlay(randomplay) {
            let randomPlay = Math.floor(Math.random() * Math.floor(3));
            if (randomPlay == 0) {
                return 'Rock';
            }
            else if (randomPlay == 1) {
                return 'Paper';
            }
            else {
                return 'Scissors';
            }
        }


        function playRound(computerSelection, playerSelection) {
            let result = '';
            if (((computerSelection == 'Rock') && (playerSelection == 'Scissors')) || ((computerSelection == 'Paper') && (playerSelection == 'Rock')) || ((computerSelection == 'Scissors') && (playerSelection == 'Paper'))) {
                result = 'Computer wins! ' + computerSelection + ' beats ' + playerSelection;
                return result;
            }
            else if (computerSelection == playerSelection) {
                result = 'Draw';
                return result;
            }
            else {
                result = 'You won! ' + playerSelection + ' beats ' + computerSelection;
                return result;
            }
        }

        let playerPoint = 0;
        let computerPoint = 0;
        

        function game() {
            computerSelection = computerPlay();
            round = playRound(computerSelection, playerSelection);


            if (round.charAt(0) == 'C') {
                const game = document.createElement('p');
                game.textContent = round;
                container.replaceChild(game, container.firstChild);
                computerPoint= computerPoint+1;
                const computerScore = document.querySelector('#computerScore');
                computerScore.textContent = computerPoint;

            } else if (round.charAt(0) == 'D') {
                const game = document.createElement('p');
                game.textContent = round;
                container.replaceChild(game, container.firstChild);
            } else {
                const game = document.createElement('p');
                game.textContent = round;
                container.replaceChild(game, container.firstChild);
                playerPoint=playerPoint+1;
                const playerScore = document.querySelector('#playerScore');
                playerScore.textContent = playerPoint;
            }
            if (computerPoint == 5) {
            
                const champ = document.createElement('p');
                champ.classList.add('champ');
                champ.textContent = 'You lost. Refresh page to play again.';
                container.appendChild(champ);
                return flag = true;
                
            } else if (playerPoint == 5) {


                const champ = document.createElement('p');
                champ.classList.add('champ');
                champ.textContent = 'You won! Refresh page to play again.';

                container.appendChild(champ);
                
                return flag = true;
            }


        }