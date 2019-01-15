String.prototype.filterWords = function (...words) {
    let s = this;
    let answer = '';
    s = s.split(' ');
    try {
        answer = new Promise(function (resolve, reject) {
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
        });
    } catch (error) {
        console.log('error');
    }
    return answer;
};
console.log('this house is nice !'.filterWords('house', 'nice'));