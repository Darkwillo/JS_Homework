//Задание 1 
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};
function deepClone(initialObj) {
    var clone;
    if (Array.isArray(initialObj)) {
        clone = [];
    } else if (typeof initialObj === 'object') {
        clone = {};
    }
    for (var k in initialObj) {
        if (Array.isArray(initialObj[k])) {
            clone[k] = deepClone(initialObj[k])
        } else if (typeof initialObj[k] === 'object') {
            clone[k] = deepClone(initialObj[k])
        } else {
            clone[k] = initialObj[k]
        }
    }
    return clone
}
var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(clonedObj);
console.log(initialObj);

// Задание 2 
function compareFunc(obj1, obj2) {

    if (obj1 === null || obj2 === null) return 1
    var objKeys1 = Object.keys(obj1)
    var objKeys2 = Object.keys(obj2)
    if (typeof obj1 !== typeof obj2) {
        return false
    }
    if (objKeys1.length !== objKeys2.length) {
        return false
    }
    for (var i = 0; i < objKeys1.length; i++) {
        if (toString(obj1.method) == toString(obj2.method)) {
            return true;
        } if (typeof obj1[objKeys1[i]] === 'object' && typeof obj2[objKeys2[i]] === 'object') {
            if (compareFunc(obj1[objKeys1[i]], obj2[objKeys2[i]])) {
                continue
            } return false
        } if (obj1[objKeys1[i]] !== obj2[objKeys2[i]]) {
            return false
        }
    }
    return true
}
compareFunc(initialObj, clonedObj);
