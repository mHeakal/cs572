String.prototype.filterWords = function (...words) {
    let s = this;
    let result = '';
    s = s.split(' ');

    s.map(function (orgWord) {
        let check = false;
        words.map(function (w) {
            if(orgWord == w){
                check = true;
            }
        });
        (check == true) ? (result += '*** ') : (result += orgWord + ' ');
    });
    return result;
};
console.log('this house is nice !'.filterWords('house', 'nice'));