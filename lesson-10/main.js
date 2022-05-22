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

    var newArr = numbers.filter(function (el) {
        return el > 0;
    })[0];
    return newArr;
}
filterNumbersArr([-1, 0, -2, -34, -2, 5, 6, -13]);
// Задание 3
function Palindroms(word) {
    return word == word.split('').reverse().join('');
}
Palindroms('шалаш');
//Задание 4
function Anagrams(word, word1) {
    var anagram = word.split('').sort().join('');
    var anagram1 = word1.split('').sort().join('');
    if (anagram == anagram1) {
        return true;
    } return false;
}
Anagrams('салат', 'атлас');
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
