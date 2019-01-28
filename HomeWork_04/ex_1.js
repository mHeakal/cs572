const os = require('os');
const { Observable } = require('rxjs');
Observable.create(function chechSystem() {
    if (os.cpus().length < 2) {
        console.log('Processor is not supported');
    } else {
        if (os.totalmem() / 1024 / 1024 / 1024 < 4) {
            console.log('This app needs at least 4 GB of RAM');
            return;
        }
    }
    console.log('System checked successfully\nYou are good to go...');
}).subscribe();