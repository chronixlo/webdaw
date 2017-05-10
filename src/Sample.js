import Audio from './Audio';

class Sample {
    constructor(audioData) {
        this.volume = Audio.ctx.createGain();
        this.volume.gain.value = 1;

        Audio.ctx.decodeAudioData(audioData, buffer => {
            this.buffer = buffer;
        });

        this.volume.connect(Audio.master);

        Audio.beats.push(this);
    }

    play() {
        this.source = Audio.ctx.createBufferSource();

        this.source.buffer = this.buffer;

        this.source.connect(this.volume);

        this.source.start(0);
    }
}

export default Sample;