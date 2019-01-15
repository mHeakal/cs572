const rxjs = require('rxjs');
const { from } = rxjs
let s = 'this house is nice';
s = s.split(' ');
let words = 'house nice';
words = words.split(' ');
filterWords = new Promise((resolve, reject) => {
    setTimeout(function () {
        let result = '';
        s.map(function (orgWord) {
            let check = false;
            words.map(function (w) {
                if (orgWord == w) {
                    check = true;
                }
            });
            (check == true) ? (result += '*** ') : (result += orgWord + ' ');
        });
        resolve(result);
    }, 1000)
});
from(filterWords).subscribe((e) => console.log(e));
// console.log('this house is nice !'.filterWords('house', 'nice'));
