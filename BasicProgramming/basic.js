/** Basic Function **/
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
/** Basic Types ***/
function add1(n1, n2) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    return n1 + n2;
}
number1 = 5;
number2 = 2.8;
result = add1(number1, number2);
console.log(result);
/** Core Datat Types **/
function add2(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
number1 = 5; // 5.0
number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add2(number1, number2, printResult, resultPhrase);
/** Type Assignment */
function add3(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num1;
number1 = 5;
number2 = 2.8;
printResult = true;
resultPhrase = 'Result is: ';
add3(num1, number2, printResult, resultPhrase);
/** Object Types */
// const person: {
//   name: string;
//   age: number;
// } = {
var personn = {
    name: 'Maximilian',
    age: 30
};
console.log(personn.name);
function add4(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var num2;
number1 = 5;
number2 = 2.8;
printResult = true;
resultPhrase = 'Result is: ';
add4(number1, number2, printResult, resultPhrase);
/** Arrays */
// const person: {
//   name: string;
//   age: number;
// } = {
var person1 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person1.name);
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
/**Tuples */
// const person: {
//   name: string;
//   age: number;
// } = {
var person2 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActivities1;
favoriteActivities1 = ['Sports'];
console.log(person2.name);
for (var _b = 0, _c = person2.hobbies; _b < _c.length; _b++) {
    var hobby = _c[_b];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
/** Enums */
// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActivities2;
favoriteActivities2 = ['Sports'];
console.log(person.name);
for (var _d = 0, _e = person.hobbies; _d < _e.length; _d++) {
    var hobby = _e[_d];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
/** Union Type */
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames1 = combine('Max', 'Anna');
console.log(combinedNames1);
/** Literal Type */
function combine1(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combinedAges1 = combine1(30, 26, 'as-number');
console.log(combinedAges1);
var combinedStringAges = combine1('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine1('Max', 'Anna', 'as-text');
console.log(combinedNames);
function combine3(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combinedAges2 = combine3(30, 26, 'as-number');
console.log(combinedAges2);
var combinedStringAges1 = combine3('30', '26', 'as-number');
console.log(combinedStringAges1);
var combinedNames2 = combine3('Max', 'Anna', 'as-text');
console.log(combinedNames2);
/** Function Types */
function add5(n1, n2) {
    return n1 + n2;
}
function printResult5(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult5(add5(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, function (result) {
    console.log(result);
});
/** Unknown and never type */
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateError('An error occurred!', 500);
