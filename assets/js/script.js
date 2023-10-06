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
