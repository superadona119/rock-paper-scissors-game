export class newGame {
    private options: string[];
    public currentScore: number;

    constructor(currentScore: number) {
        this.options = ['rock', 'paper', 'scissors']
        this.currentScore = currentScore
    }

    get(): string {
        return `hi, lol ${this.options[1]} ${this.currentScore}`
    }
}