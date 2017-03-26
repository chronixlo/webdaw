class Audio {
    constructor() {
        this.channels = [];

        this.ctx = new AudioContext();

        this.master = this.ctx.createGain();
        this.master.gain.value = .05;
    }

    play() {
        this.master.connect(this.ctx.destination);
    }
}

export default new Audio();