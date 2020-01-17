/** Classes and Constructor Functions*/

class Department {
    name: string;
  
    constructor(n: string) {
      this.name = n;
    }
  
    describe(this: Department) {
      console.log('Department: ' + this.name);
    }
  }
  
  const accounting = new Department('Accounting');
  
  accounting.describe();
  
  const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  accountingCopy.describe();






  /** private and public access modifiers  */

  class Department1 {
    public name: string;
    private employees: string[] = [];
  
    constructor(n: string) {
      this.name = n;
    }
  
    describe(this: Department1) {
      console.log('Department: ' + this.name);
    }
  
    addEmployee(employee: string) {
      // validation etc
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  const accounting1 = new Department1('Accounting');
  
  accounting1.addEmployee('Max');
  accounting1.addEmployee('Manu');
  
  // accounting.employees[2] = 'Anna';
  
  accounting1.describe();
  accounting1.name = 'NEW NAME';
  accounting1.printEmployeeInformation();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();

  
  
  
  

  /** ShortHand Initializtion */
  
  class Department2 {
    // private id: string;
    // private name: string;
    private employees: string[] = [];
  
    constructor(private id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }
  
    describe(this: Department2) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // validation etc
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  const accounting2 = new Department2('d1', 'Accounting');
  
  accounting2.addEmployee('Max');
  accounting2.addEmployee('Manu');
  
  // accounting.employees[2] = 'Anna';
  
  accounting2.describe();
  accounting2.name = 'NEW NAME';
  accounting2.printEmployeeInformation();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();
  
  
  
  

/** Readonly  */

class Department3 {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department3) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting3 = new Department3('d1', 'Accounting');

accounting3.addEmployee('Max');
accounting3.addEmployee('Manu');

// accounting.employees[2] = 'Anna';

accounting3.describe();
accounting3.name = 'NEW NAME';
accounting3.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();





/** Inheritance */

class Department4 {
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }
  
    describe(this: Department4) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2';
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment extends Department4 {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  }
  
  class AccountingDepartment extends Department4 {
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }
  
    addReport(text: string) {
      this.reports.push(text);
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const it = new ITDepartment('d1', ['Max']);
  
  it.addEmployee('Max');
  it.addEmployee('Manu');
  
  // it.employees[2] = 'Anna';
  
  it.describe();
  it.name = 'NEW NAME';
  it.printEmployeeInformation();
  
  console.log(it);
  
  const accounting4 = new AccountingDepartment('d2', []);
  
  accounting4.addReport('Something went wrong...');
  
  accounting4.printReports();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();





/** Overriding and protected access */

class Department5 {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }
  
    describe(this: Department5) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2';
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment2 extends Department5 {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  }
  
  class AccountingDepartment1 extends Department5 {
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }
  
    addEmployee(name: string) {
      if (name === 'Max') {
        return;
      }
      this.employees.push(name);
    }
  
    addReport(text: string) {
      this.reports.push(text);
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const it2 = new ITDepartment2('d1', ['Max']);
  
  it2.addEmployee('Max');
  it2.addEmployee('Manu');
  
  // it.employees[2] = 'Anna';
  
  it2.describe();
  it2.name = 'NEW NAME';
  it2.printEmployeeInformation();
  
  console.log(it2);
  
  const accounting5 = new AccountingDepartment1('d2', []);
  
  accounting5.addReport('Something went wrong...');
  
  accounting5.addEmployee('Max');
  accounting5.addEmployee('Manu');
  
  accounting5.printReports();
  accounting5.printEmployeeInformation();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();




  /** Getters and Setters */

  class Department6 {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }
  
    describe(this: Department6) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2';
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment3 extends Department6 {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  }
  
  class AccountingDepartment2 extends Department6 {
    private lastReport: string;
  
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found.');
    }
  
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
    }
  
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }
  
    addEmployee(name: string) {
      if (name === 'Max') {
        return;
      }
      this.employees.push(name);
    }
  
    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const it4 = new ITDepartment3('d1', ['Max']);
  
  it4.addEmployee('Max');
  it4.addEmployee('Manu');
  
  // it.employees[2] = 'Anna';
  
  it4.describe();
  it4.name = 'NEW NAME';
  it4.printEmployeeInformation();
  
  console.log(it);
  
  const accounting6 = new AccountingDepartment2('d2', []);
  
  accounting6.mostRecentReport = 'Year End Report';
  accounting6.addReport('Something went wrong...');
  console.log(accounting6.mostRecentReport);
  
  accounting6.addEmployee('Max');
  accounting6.addEmployee('Manu');
  
  accounting6.printReports();
  accounting6.printEmployeeInformation();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();
  






  /** Abstract Class */

  abstract class Department7 {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(protected readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
      // console.log(Department.fiscalYear);
    }
  
    static createEmployee(name: string) {
      return { name: name };
    }
  
    abstract describe(this: Department7): void;
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2';
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment4 extends Department7 {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  
    describe() {
      console.log('IT Department - ID: ' + this.id);
    }
  }
  
  class AccountingDepartment3 extends Department7 {
    private lastReport: string;
  
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found.');
    }
  
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
    }
  
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }
  
    describe() {
      console.log('Accounting Department - ID: ' + this.id);
    }
  
    addEmployee(name: string) {
      if (name === 'Max') {
        return;
      }
      this.employees.push(name);
    }
  
    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const employee1 = Department7.createEmployee('Max');
  console.log(employee1, Department7.fiscalYear);
  
  const it5 = new ITDepartment4('d1', ['Max']);
  
  it5.addEmployee('Max');
  it5.addEmployee('Manu');
  
  // it.employees[2] = 'Anna';
  
  it5.describe();
  it5.name = 'NEW NAME';
  it5.printEmployeeInformation();
  
  console.log(it);
  
  const accounting8 = new AccountingDepartment3('d2', []);
  
  accounting8.mostRecentReport = 'Year End Report';
  accounting8.addReport('Something went wrong...');
  console.log(accounting8.mostRecentReport);
  
  accounting8.addEmployee('Max');
  accounting8.addEmployee('Manu');
  
  // accounting.printReports();
  // accounting.printEmployeeInformation();
  accounting8.describe();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();
  




  /** private constructors */

  abstract class Department8 {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
  
    constructor(protected readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
      // console.log(Department.fiscalYear);
    }
  
    static createEmployee(name: string) {
      return { name: name };
    }
  
    abstract describe(this: Department8): void;
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2';
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment5 extends Department8 {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  
    describe() {
      console.log('IT Department - ID: ' + this.id);
    }
  }
  
  class AccountingDepartment4 extends Department8 {
    private lastReport: string;
    private static instance: AccountingDepartment4;
  
    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found.');
    }
  
    set mostRecentReport(value: string) {
      if (!value) {
        throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
    }
  
    private constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
    }
  
    static getInstance() {
      if (AccountingDepartment4.instance) {
        return this.instance;
      }
      this.instance = new AccountingDepartment4('d2', []);
      return this.instance;
    }
  
    describe() {
      console.log('Accounting Department - ID: ' + this.id);
    }
  
    addEmployee(name: string) {
      if (name === 'Max') {
        return;
      }
      this.employees.push(name);
    }
  
    addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const employee12 = Department8.createEmployee('Max');
  console.log(employee1, Department8.fiscalYear);
  
  const it8 = new ITDepartment5('d1', ['Max']);
  
  it8.addEmployee('Max');
  it8.addEmployee('Manu');
  
  // it.employees[2] = 'Anna';
  
  it8.describe();
  it8.name = 'NEW NAME';
  it8.printEmployeeInformation();
  
  console.log(it8);
  
  // const accounting = new AccountingDepartment('d2', []);
  const accounting9 = AccountingDepartment4.getInstance();
  const accounting29 = AccountingDepartment4.getInstance();
  
  console.log(accounting9, accounting29);
  
  accounting9.mostRecentReport = 'Year End Report';
  accounting9.addReport('Something went wrong...');
  console.log(accounting9.mostRecentReport);
  
  accounting9.addEmployee('Max');
  accounting9.addEmployee('Manu');
  
  // accounting.printReports();
  // accounting.printEmployeeInformation();
  accounting9.describe();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();
  




  /** Interfaces */

  interface Person {
    name: string;
    age: number;
  
    greet(phrase: string): void;
  }
  
  let user1: Person;
  
  user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    }
  };
  
  user1.greet('Hi there - I am');




  
  
  /** Implementing Interfaces */

  interface Greetable {
    name: string;
  
    greet(phrase: string): void;
  }
  
  class Person implements Greetable {
    name: string;
    age = 30;
  
    constructor(n: string) {
      this.name = n;
    }
  
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    }
  }
  
  let user12: Greetable;
  
  user12 = new Person('Max');
  
  user12.greet('Hi there - I am');
  console.log(user12);





  /** Interface Inheritance */

  interface Named {
    readonly name: string;
  }
  
  interface Greetable extends Named {
    greet(phrase: string): void;
  }
  
  class Person1 implements Greetable {
    name: string;
    age = 30;
  
    constructor(n: string) {
      this.name = n;
    }
  
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    }
  }
  
  let user13: Greetable;
  
  user13 = new Person1('Max');
  // user1.name = 'Manu';
  
  user13.greet('Hi there - I am');
  console.log(user13);
  






  /** Interface Functions */

  // type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
  }
  
  let add: AddFn;
  
  add = (n1: number, n2: number) => {
    return n1 + n2;
  };
  
  interface Named {
    readonly name: string;
  }
  
  interface Greetable extends Named {
    greet(phrase: string): void;
  }
  
  class Person2 implements Greetable {
    name: string;
    age = 30;
  
    constructor(n: string) {
      this.name = n;
    }
  
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    }
  }
  
  let user11: Greetable;
  
  user11 = new Person2('Max');
  // user1.name = 'Manu';
  
  user11.greet('Hi there - I am');
  console.log(user11);