

// Задание 1 
var regexp = /^[a-z]{3,10}\_[a-z]{3,10}(\-\d{4})?\@[a-z\d]{2,10}((\.)|(\-))?[a-z\d]{1,10}\.com$/i
regexp.test('name_surname-1234@gfdf-fdfgdg.com')


// Задание 2
function foneNumber(number, expression) {
    var reg = new RegExp(expression, 'igm');
    var test = reg.test(number)
    return test;
}
foneNumber('8-033-100-94-11', /^(\+?375\-?|8\-?0)(17|25|29|33|44)\-?[1-9]\d{2}(\-?\d{2}){2}$/);


// Задание 3
//Вариант (1)
function vowelsFilter(word) {
    var vowelsLeter = word.split(/[^аеёиоуыэюя]/igm);
    var count = 0;
    for (var x = 0; x < vowelsLeter.length; x++) {
        if (vowelsLeter[x].length > 1) {
            count += vowelsLeter[x].length;
        } else if (vowelsLeter[x]) {
            count += 1;
        }
    }
    return count;
}
vowelsFilter('Написать функцию, которая будет принимать текст в качестве параметра');
//Вариант (2)
function vowelsFilter(word) {
    var vowelsLeter = word.match(/[аеёиоуыэюя]/igm);
    var count = 0;
    if(vowelsLeter == null) {
        return 0;
    }
    for (var x = 0; x < vowelsLeter.length; x++) {
        if (vowelsLeter[x]) {
            count += 1;
        } 
    }
    return count;
}
vowelsFilter('Написать функцию, которая будет принимать текст в качестве параметра');