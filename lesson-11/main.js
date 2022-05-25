// Задание 1 
function peopleNames(names) {
    var obj = {};
    var keyName = names.map(function (item) {
        return obj = { name: item };
    });
    console.log(keyName);
}
peopleNames(['Vasya', 'Petya', 'Egor', 'Sasha', 'Masha']);
// Задание 2
function time(time) {

    var arrayToString = time.reduce(function (item, current) {
        return item + ' : ' + current;
    });
    console.log('Текущее время: ' + arrayToString);
}
time(['00', '13', '25']);
// Задание 3
function vowelsFilter(word) {
    var vowelsLeter = 'аеёиоуыэюя';
    var count = 0;
    for (var x = 0; x < word.length; x++) {
        if (vowelsLeter.indexOf(word[x]) == -1) {
            continue
        } else {
            count += 1;
        }
    }
    return count;
}
vowelsFilter('Написать функцию, которая будет принимать текст в качестве параметра');
// Задание 4 
function lengthСalculation(text) {
    var textSplit = text.split(/[\!\?\.]+/);
    for (var i = 0; i < textSplit.length; i++) {
        if (!textSplit[i]) {
            break;
        }
        console.log(textSplit[i] + ' : Letters quantity is : ' + textSplit[i].split(/[\,\ ]+/).join('').length);
    }
}
lengthСalculation('Привет, студент! Студент... Как дела, студент?');