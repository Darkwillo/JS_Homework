//Задание 1 
function filterNumbersArr(numbers) {

    var newArr = numbers.filter(function (el) {
        return el > 0;
    });
    return newArr;
}
filterNumbersArr([-1, 0, 2, 34, -2, 5, 6, -13]);
// Задание 2 
function filterNumbersArr(numbers) {

    var newArr = numbers.find(function (el) {
        return el > 0;
    });
    return newArr;
}
filterNumbersArr([-1, 0, -2, -34, -2, 5, 6, -13]);
// Задание 3
function palindroms(word) {
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('');
}
palindroms('ШАЛАШ');
//Задание 4
function anagrams(word, word1) {
    word = word.toLowerCase().split('').sort().join('');
    word1 = word1.toLowerCase().split('').sort().join('');
    if (word === word1) {
        return true;
    } return false;
}
anagrams('салат', 'атлас');
// Задание 5
function divideArr(numbers, divide) {
    var newArr = [];
    for (var i = 0; ;) {
        newArr.push(numbers.splice(0, divide));
        if (numbers.length === 0) {
            break;
        }
    }
    return newArr;
}
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);
