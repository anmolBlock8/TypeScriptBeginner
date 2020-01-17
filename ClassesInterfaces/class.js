/** Classes and Constructor Functions*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.describe();
var accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe();
/** private and public access modifiers  */
var Department1 = /** @class */ (function () {
    function Department1(n) {
        this.employees = [];
        this.name = n;
    }
    Department1.prototype.describe = function () {
        console.log('Department: ' + this.name);
    };
    Department1.prototype.addEmployee = function (employee) {
        // validation etc
        this.employees.push(employee);
    };
    Department1.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department1;
}());
var accounting1 = new Department1('Accounting');
accounting1.addEmployee('Max');
accounting1.addEmployee('Manu');
// accounting.employees[2] = 'Anna';
accounting1.describe();
accounting1.name = 'NEW NAME';
accounting1.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
/** ShortHand Initializtion */
var Department2 = /** @class */ (function () {
    function Department2(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department2.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department2.prototype.addEmployee = function (employee) {
        // validation etc
        this.employees.push(employee);
    };
    Department2.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department2;
}());
var accounting2 = new Department2('d1', 'Accounting');
accounting2.addEmployee('Max');
accounting2.addEmployee('Manu');
// accounting.employees[2] = 'Anna';
accounting2.describe();
accounting2.name = 'NEW NAME';
accounting2.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
/** Readonly  */
var Department3 = /** @class */ (function () {
    function Department3(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department3.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department3.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department3.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department3;
}());
var accounting3 = new Department3('d1', 'Accounting');
accounting3.addEmployee('Max');
accounting3.addEmployee('Manu');
// accounting.employees[2] = 'Anna';
accounting3.describe();
accounting3.name = 'NEW NAME';
accounting3.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
/** Inheritance */
var Department4 = /** @class */ (function () {
    function Department4(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department4.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department4.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department4.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department4;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department4));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department4));
var it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
// it.employees[2] = 'Anna';
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);
var accounting4 = new AccountingDepartment('d2', []);
accounting4.addReport('Something went wrong...');
accounting4.printReports();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
/** Overriding and protected access */
var Department5 = /** @class */ (function () {
    function Department5(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department5.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department5.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department5.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department5;
}());
var ITDepartment2 = /** @class */ (function (_super) {
    __extends(ITDepartment2, _super);
    function ITDepartment2(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment2;
}(Department5));
var AccountingDepartment1 = /** @class */ (function (_super) {
    __extends(AccountingDepartment1, _super);
    function AccountingDepartment1(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment1.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment1.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    AccountingDepartment1.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment1;
}(Department5));
var it2 = new ITDepartment2('d1', ['Max']);
it2.addEmployee('Max');
it2.addEmployee('Manu');
// it.employees[2] = 'Anna';
it2.describe();
it2.name = 'NEW NAME';
it2.printEmployeeInformation();
console.log(it2);
var accounting5 = new AccountingDepartment1('d2', []);
accounting5.addReport('Something went wrong...');
accounting5.addEmployee('Max');
accounting5.addEmployee('Manu');
accounting5.printReports();
accounting5.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
/** Getters and Setters */
var Department6 = /** @class */ (function () {
    function Department6(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    Department6.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department6.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department6.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department6;
}());
var ITDepartment3 = /** @class */ (function (_super) {
    __extends(ITDepartment3, _super);
    function ITDepartment3(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment3;
}(Department6));
var AccountingDepartment2 = /** @class */ (function (_super) {
    __extends(AccountingDepartment2, _super);
    function AccountingDepartment2(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment2.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment2.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment2.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment2.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment2;
}(Department6));
var it4 = new ITDepartment3('d1', ['Max']);
it4.addEmployee('Max');
it4.addEmployee('Manu');
// it.employees[2] = 'Anna';
it4.describe();
it4.name = 'NEW NAME';
it4.printEmployeeInformation();
console.log(it);
var accounting6 = new AccountingDepartment2('d2', []);
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
var Department7 = /** @class */ (function () {
    function Department7(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
    }
    Department7.createEmployee = function (name) {
        return { name: name };
    };
    Department7.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department7.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department7.fiscalYear = 2020;
    return Department7;
}());
var ITDepartment4 = /** @class */ (function (_super) {
    __extends(ITDepartment4, _super);
    function ITDepartment4(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment4.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment4;
}(Department7));
var AccountingDepartment3 = /** @class */ (function (_super) {
    __extends(AccountingDepartment3, _super);
    function AccountingDepartment3(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment3.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment3.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    AccountingDepartment3.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment3.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment3.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment3;
}(Department7));
var employee1 = Department7.createEmployee('Max');
console.log(employee1, Department7.fiscalYear);
var it5 = new ITDepartment4('d1', ['Max']);
it5.addEmployee('Max');
it5.addEmployee('Manu');
// it.employees[2] = 'Anna';
it5.describe();
it5.name = 'NEW NAME';
it5.printEmployeeInformation();
console.log(it);
var accounting8 = new AccountingDepartment3('d2', []);
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
var Department8 = /** @class */ (function () {
    function Department8(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
    }
    Department8.createEmployee = function (name) {
        return { name: name };
    };
    Department8.prototype.addEmployee = function (employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    };
    Department8.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department8.fiscalYear = 2020;
    return Department8;
}());
var ITDepartment5 = /** @class */ (function (_super) {
    __extends(ITDepartment5, _super);
    function ITDepartment5(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment5.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment5;
}(Department8));
var AccountingDepartment4 = /** @class */ (function (_super) {
    __extends(AccountingDepartment4, _super);
    function AccountingDepartment4(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment4.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment4.getInstance = function () {
        if (AccountingDepartment4.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment4('d2', []);
        return this.instance;
    };
    AccountingDepartment4.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    AccountingDepartment4.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment4.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment4.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment4;
}(Department8));
var employee12 = Department8.createEmployee('Max');
console.log(employee1, Department8.fiscalYear);
var it8 = new ITDepartment5('d1', ['Max']);
it8.addEmployee('Max');
it8.addEmployee('Manu');
// it.employees[2] = 'Anna';
it8.describe();
it8.name = 'NEW NAME';
it8.printEmployeeInformation();
console.log(it8);
// const accounting = new AccountingDepartment('d2', []);
var accounting9 = AccountingDepartment4.getInstance();
var accounting29 = AccountingDepartment4.getInstance();
console.log(accounting9, accounting29);
accounting9.mostRecentReport = 'Year End Report';
accounting9.addReport('Something went wrong...');
console.log(accounting9.mostRecentReport);
accounting9.addEmployee('Max');
accounting9.addEmployee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting9.describe();
var user1;
user1 = {
    name: 'Max',
    age: 30,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there - I am');
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user12;
user12 = new Person('Max');
user12.greet('Hi there - I am');
console.log(user12);
var Person1 = /** @class */ (function () {
    function Person1(n) {
        this.age = 30;
        this.name = n;
    }
    Person1.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person1;
}());
var user13;
user13 = new Person1('Max');
// user1.name = 'Manu';
user13.greet('Hi there - I am');
console.log(user13);
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person2 = /** @class */ (function () {
    function Person2(n) {
        this.age = 30;
        this.name = n;
    }
    Person2.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person2;
}());
var user11;
user11 = new Person2('Max');
// user1.name = 'Manu';
user11.greet('Hi there - I am');
console.log(user11);
