filterNow = function (s, words) {
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
    return result;
};

String.prototype.filterWords = async function (...words) {
    let s = this;
    let answer = '';
    s = s.split(' ');
    try {
        answer = await filterNow(s, words);
    } catch (error) {
        console.log('error');
    }
    console.log(answer);
    return answer;
};

'this house is nice !'.filterWords('house', 'nice');