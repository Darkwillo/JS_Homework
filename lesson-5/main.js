// Задание 1
function isEmpty(obj) {
      if (!obj){
         return true;
      }
      return false;
   }
   isEmpty();
// Задание 2
var x = +prompt('Ввведите число X');
var n = +prompt('Ввведите число N');
function pow(x, n) {
   while (true) {
      if (x < 1 && n < 1) {
         x = +prompt('Ввведите число X');
         n = +prompt('Ввведите число N');
      } else if (x % 1 != 0 && n % 1 != 0) {
         x = +prompt('Ввведите целое число X');
         n = +prompt('Ввведите целое число N');
      } else {
         break;
      }
   }
   return (n == 1) ? x : (x * pow(x, n - 1));
}
alert(pow(x, n));

// Задание 3
function sumTo(n) {
   var sum = 0;
   for (var i = 1; i <= n; i++) {
      sum += i;
   }
   return sum;
}
sumTo(4);

// Данный способ,на мой взгляд, самый быстрый,т.к только мы указываем значение n оно и 2-е другие переменный подставляются в формулу в котороый сразу идет подсчет,
// тут не нужно ждать выполнения цикла, выполнения вложеных вызовов,как в рекурсии
function sumTo(n) {
   var d = 1;
   var i = 1;
   n = ((2 * i) + d * (n - 1)) / 2 * n;
   return n;
}
sumTo(5);

// Скорее всего, данный способ самый медленный и не экономный для памяти, т.к при использовании рекурсии выполнение текущей функции приостонавливается и момент в котором ее работа приостановилась записывается,
// в этот момент начинают работать вложенные вызовы, данной функции, и также, каждый из них сохранятеся в памяти, и только после отработки последнего 
// вызова возобновляется работа первого вызова. Если представить большое кол-во вызовов,
// то это может плохо сказаться на работе устройства. 100000 вызовов могут обрабоать лишь некоторые интерпретаторы, для остальных это невозможно, скорее всего необходимо много памяти,для записи вложеных вызовов
function sumTo(n) {
   if (n > 1) {
      return n + sumTo(n - 1);
   } else {
      return 1;
   }
}
sumTo(2);


// Задание 4
n = [
   5, 7,
   [4, [2], 8, [1, 3], 2],NaN
   [9, []],
   1, 8
];
function treeSum(n){
var sum = 0;
for(var a = 0 ; a < n.length; a++){
   if (typeof n[a] == 'number' && !isNaN(n[a])){
   sum += n[a]; 
}else if (typeof n[a] == 'object' && n[a].length !== undefined && n[a] !== null ){
for (var b = 0 ;b < n[a].length; b++){
   if (typeof n[a][b] == 'number' && !isNaN(n[a][b])) {
   sum += n[a][b];
}else if (typeof n[a][b] == 'object' && n[a][b].length !== undefined && n[a][b] !== null){
   for(var c = 0; c < n[a][b].length; c++){
      sum += n[a][b][c];
   }
}
}
}
}
return sum;
}
treeSum(n);