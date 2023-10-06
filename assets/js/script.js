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