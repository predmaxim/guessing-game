class GuessingGame {
    constructor() {
        this.root = null
        this.max = null
        this.min = null
    }
    setRange(min, max) {
        this.max = max
        this.min = min
    }
    guess() {
        this.root = Math.round((this.min + this.max) / 2)
        return this.root
    }

    lower() { this.max = this.root }
    greater() { this.min = this.root }
}
module.exports = GuessingGame