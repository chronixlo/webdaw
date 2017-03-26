import Audio from './Audio';

class Player {
    constructor() {
        this.bar = 0;
        this.tempo = 120;

        Audio.play();

        this.tick();

        setInterval(this.tick.bind(this), 1000 * (60 / this.tempo));
    }

    tick() {
        Audio.channels.forEach(channel => {
            channel.osc.frequency.value = channel.pattern[this.bar];
        });

        this.bar++;

        if (this.bar === 4) {
            this.bar = 0;
        }
    }
}

export default Player;