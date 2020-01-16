/** Basic Function **/

function add(n1: number, n2: number) {
    return n1 + n2;
  }
  
  let number1 = 5;
  let number2 = 2.8;
  
  let result = add(number1, number2);
  console.log(result);





  /** Basic Types ***/

  function add1(n1: number, n2: number) {
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

  function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }
  
  number1 = 5; // 5.0
  number2 = 2.8;
  let printResult = true;
  let resultPhrase = 'Result is: ';
  
  add2(number1, number2, printResult, resultPhrase);
  





  /** Type Assignment */

  function add3(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }
  
  let num1: number;
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
  const personn = {
    name: 'Maximilian',
    age: 30
  };
  
  console.log(personn.name);


  function add4(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }
  
  let num2: number;
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
const person1 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
  };
  
  let favoriteActivities: string[];
  favoriteActivities = ['Sports'];
  
  console.log(person1.name);
  
  for (const hobby of person1.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
  }
  






  /**Tuples */

  // const person: {
  //   name: string;
  //   age: number;
  // } = {
const person2: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
  };
  
  // person.role.push('admin');
  // person.role[1] = 10;
  
  // person.role = [0, 'admin', 'user'];
  
  let favoriteActivities1: string[];
  favoriteActivities1 = ['Sports'];
  
  console.log(person2.name);
  
  for (const hobby of person2.hobbies) {
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

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities2: string[];
favoriteActivities2 = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}






/** Union Type */

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  
  const combinedAges = combine(30, 26);
  console.log(combinedAges);
  
  const combinedNames1 = combine('Max', 'Anna');
  console.log(combinedNames1);

  




  /** Literal Type */

  function combine1(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
  ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
  }
  
  const combinedAges1 = combine1(30, 26, 'as-number');
  console.log(combinedAges1);
  
  const combinedStringAges = combine1('30', '26', 'as-number');
  console.log(combinedStringAges);
  
  const combinedNames = combine1('Max', 'Anna', 'as-text');
  console.log(combinedNames);






  /** Type Aliases */

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine3(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges2 = combine3(30, 26, 'as-number');
console.log(combinedAges2);

const combinedStringAges1 = combine3('30', '26', 'as-number');
console.log(combinedStringAges1);

const combinedNames2 = combine3('Max', 'Anna', 'as-text');
console.log(combinedNames2);






  /** Function Types */

  function add5(n1: number, n2: number) {
    return n1 + n2;
  }
  
  function printResult5(num: number): void {
    console.log('Result: ' + num);
  }
  
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }
  
  printResult5(add5(5, 12));
  
  let combineValues: (a: number, b: number) => number;
  
  combineValues = add;
  // combineValues = printResult;
  // combineValues = 5;
  
  console.log(combineValues(8, 8));
  
  // let someValue: undefined;
  
  addAndHandle(10, 20, (result) => {
    console.log(result);
  });





  /** Unknown and never type */

  let userInput: unknown;
  let userName1: string;

  userInput = 5;
  userInput = 'Max';
  if (typeof userInput === 'string') {
    userName1 = userInput;
  }

  function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // while (true) {}
  }

  generateError('An error occurred!', 500);




  /** Arrow Function */

const add6 = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add6(5, 2));






/** Spread Operator */

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person6 = {
  name: 'Max',
  age: 30
};

const copiedPerson = { ...person6 };




/** Rest Operator */

const hobbies1 = ['Sports', 'Cooking'];
const activeHobbies1 = ['Hiking'];

activeHobbies1.push(...hobbies1);

const person7 = {
  name: 'Max',
  age: 30
};

const copiedPerson1 = { ...person7 };

const add7 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add7(5, 10, 2, 3.7);
console.log(addedNumbers);




/** Object Destructing */

const hobbies2 = ['Sports', 'Cooking'];
const activeHobbies2 = ['Hiking'];

activeHobbies2.push(...hobbies2);

const person8 = {
  firstName: 'Max',
  age: 30
};

const copiedPerson2 = { ...person8 };

const add8 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers2 = add8(5, 10, 2, 3.7);
console.log(addedNumbers2);

const [hobby1, hobby2, ...remainingHobbies] = hobbies2;

console.log(hobbies2, hobby1, hobby2);

const { firstName: userName, age } = person8;

console.log(userName, age, person2);