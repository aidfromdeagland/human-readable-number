module.exports = function toReadable (number) {
    const numberMap = {
        0: ['', '', ''],
        1: ['one', 'ten', 'one hundred'],
        2: ['two', 'twenty', 'two hundred'],
        3: ['three', 'thirty', 'three hundred'],
        4: ['four', 'forty', 'four hundred'],
        5: ['five', 'fifty', 'five hundred'],
        6: ['six', 'sixty', 'six hundred'],
        7: ['seven', 'seventy', 'seven hundred'],
        8: ['eight', 'eighty', 'eight hundred'],
        9: ['nine', 'ninety', 'nine hundred']
    };

    const teenMap = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    let digits = number.toString().split('');
    let result = digits.map((x, index) => numberMap[x][digits.length - 1 - index]);

    if (digits[digits.length - 2] === '1') {
        result[digits.length - 2] = teenMap[digits[digits.length - 2] + digits[digits.length - 1]];
        result.pop();
    }

    return number !== 0 ? result.filter(x => x !== '').join(' ') : 'zero';
};
