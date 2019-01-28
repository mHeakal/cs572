var eventEmitter = require('events')
class Gym extends eventEmitter {
    constructor() {
        super();
    }
    work() {
        setInterval(() => {
            this.emit('boom');
        }, 1000);
    }
}
var gym = new Gym();
gym.on('boom', () => console.log('Athlete is working out'));
gym.work();