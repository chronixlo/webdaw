import Audio from './Audio';

class Synth {
    constructor() {
        this.volume = Audio.ctx.createGain();
        this.volume.gain.value = .5;
        
        this.osc = Audio.ctx.createOscillator();

        this.osc.start();

        this.osc.connect(this.volume);
        this.volume.connect(Audio.master);

        this.pattern = [500, 1000, 500, 250];

        Audio.channels.push(this);
    }
}

export default Synth;