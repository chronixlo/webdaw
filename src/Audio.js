class Audio {
    constructor() {
        this.channels = [];
        this.beats = [];
        this.beatPatterns = [];

        this.samples = {};

        this.ctx = new AudioContext();

        this.master = this.ctx.createGain();
        this.master.gain.value = .05;
    }

    play() {
        this.master.connect(this.ctx.destination);
    }

    stop() {
        this.master.disconnect(this.ctx.destination);
    }

    addSamples(samples) {
        
    }

    getSamples() {
        return this.beats;
    }

    setBeatPattern(i, pattern) {
        this.beatPatterns[i] = pattern;
    }
}

export default new Audio();