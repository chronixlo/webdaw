class Audio {
    constructor() {
        this.channels = [];
        this.beats = [];
        this.beatPatterns = [];

        this.samples = {};

        this.ctx = new (window.AudioContext || window.webkitAudioContext)();

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

    getBeatPattern(i) {
        return this.beatPatterns[i] || new Array(16).fill(false);
    }

    setBeatPattern(i, pattern) {
        this.beatPatterns[i] = pattern;
    }
}

export default new Audio();