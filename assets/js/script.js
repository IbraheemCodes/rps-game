class Player {
    constructor(id, name, score, streak) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.streak = streak;
    }

    getScore() {
        return this.score;
    }

    getStreak() {
        return this.streak;
    }

    incrementScore() {
        this.score++;
    }

    incrementStreak() {
        this.streak++;
    }

    resetStreak() {
        this.streak = 0;
    }
}

class Game {
    constructor(message, winningOpponentName, highestStreak) {
        this.message = message;
        this.winningOpponentName = winningOpponentName;
        this.highestStreak = highestStreak;
    }
    
    getMessage() {
        return this.message;
    }

    getWinningOpponentName() {
        return this.winningOpponentName;
    }

    getHighestStreak() {
        return this.highestStreak;
    }

    setMessage(newMessage) {
        this.message = newMessage;
    }

    setWinningOpponentName(opponentName) {
        this.winningOpponentName = opponentName;
    }

    setHighestStreak(num) {
        this.highestStreak = num;
    }
}

const Items = {
    "Rock": 1,
    "Paper": 2,
    "Scissor": 3
}

const humanPlayer = new Player(1, "You", 0, 0);
const botPlayer = new Player(2, "Computer", 0, 0);
const game = new Game("","","");

function doRps(myItemId) {

    const botChosenItemId = Math.floor(Math.random() * Object.keys(Items).length) + 1;
    const myItemImg = document.getElementById("myItemImg");
    const botItemImg = document.getElementById("botItemImg");
    const myScore = document.getElementById("my-score");
    const botScore = document.getElementById("bot-score");

    const messageContent = document.getElementById("message-content");

    if(myItemId === Items.Rock) {
        
        myItemImg.src = "./assets/images/rock.png";

        if(botChosenItemId === Items.Rock) {
            botItemImg.src = "./assets/images/rock.png";
            game.setMessage("It's a draw");
        }

        if(botChosenItemId === Items.Paper) {
            botItemImg.src = "./assets/images/paper.png";
            humanPlayer.resetStreak();
            botPlayer.incrementScore();
            botPlayer.incrementStreak();
            game.setHighestStreak(botPlayer.getStreak());
            game.setMessage("Bot won");
        }

        if(botChosenItemId === Items.Scissor) {
            botItemImg.src = "./assets/images/scissor.png";
            botPlayer.resetStreak();
            humanPlayer.incrementScore();
            humanPlayer.incrementStreak();
            game.setHighestStreak(humanPlayer.getStreak());
            game.setMessage("You won");
        }
    }
}
if(myItemId === Items.Paper) {
    myItemImg.src = "./assets/images/paper.png";

    if(botChosenItemId === Items.Paper) {
        botItemImg.src = "./assets/images/paper.png";
        game.setMessage("It's a draw");
    }

    if(botChosenItemId === Items.Rock) {
        botItemImg.src = "./assets/images/rock.png";
        humanPlayer.incrementScore();
        humanPlayer.incrementStreak();
        botPlayer.resetStreak();
        game.setHighestStreak(humanPlayer.getStreak());
        game.setMessage("You won");
    }

    if(botChosenItemId === Items.Scissor) {
        botItemImg.src = "./assets/images/scissor.png";
        humanPlayer.resetStreak();
        botPlayer.incrementStreak();
        botPlayer.incrementScore();
        game.setHighestStreak(botPlayer.getStreak());
        game.setMessage("Bot won");
    }
}

if(myItemId === Items.Scissor) {
    myItemImg.src = "./assets/images/scissor.png";

    if(botChosenItemId === Items.Scissor) {
        botItemImg.src = "./assets/images/scissor.png";
        game.setMessage("It's a draw");
    }

    if(botChosenItemId === Items.Rock) {
        botItemImg.src = "./assets/images/rock.png";
        humanPlayer.resetStreak();
        botPlayer.incrementScore();
        botPlayer.incrementStreak();
        game.setHighestStreak(botPlayer.getStreak());
        game.setMessage("Bot won");
    }

    if(botChosenItemId === Items.Paper) {
        botItemImg.src = "./assets/images/paper.png";
        humanPlayer.incrementScore();
        humanPlayer.incrementStreak();
        botPlayer.resetStreak();
        game.setHighestStreak(humanPlayer.getStreak());
        game.setMessage("You won");
    }
}
