console.log("#".repeat(30));
console.log(
  "%cRegular Expression|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// ===========================================================

/*
- Construction Function
- Update Properties
- Buildin Constructor

*/

// function User(id, userName, Salary) {
//   this.id = id;
//   this.userName = userName;
//   this.Salary = Salary + 2000;
// }

// class User {
//   constructor(id, userName, Salary) {
//     // Properties:
//     this.id = id;
//     this.userName = userName;
//     this.Salary = Salary < 6000 ? Salary + 500 : Salary;
//     this.msg = function () {
//       return `Hello, ${this.userName} Your Salary Is ${this.Salary}`;
//     };
//   }
//   // Methods:
//   helloMsg() {
//     return `Hello, ${this.userName} Your Salary Is ${this.Salary}`;
//   }
//   updateName(newName) {
//     this.userName = newName;
//   }
// }

// let userOne = new User(10, "shady", 5000);
// let userTwo = new User(11, "Ali", 6000);
// let userThree = new User(12, "Ahmed", 7000);

// console.log(userOne.constructor === User);
// console.log(userOne instanceof User);
// console.log("#".repeat(20));

// console.log(userOne);
// console.log(userOne.id);
// console.log(userOne.userName);
// console.log(userOne.Salary);
// console.log(userOne.msg());
// console.log(userOne.msg);
// console.log(userOne.helloMsg);
// console.log(userOne.helloMsg());

// userOne.updateName("Mohamed");
// console.log(userOne.userName);

// console.log("#".repeat(20));

// console.log(userTwo);
// console.log(userTwo.id);
// console.log(userTwo.userName);
// console.log(userTwo.Salary);
// console.log(userTwo.msg());
// console.log(userTwo.helloMsg());

// console.log("#".repeat(20));

// console.log(userThree);
// console.log(userThree.id);
// console.log(userThree.userName);
// console.log(userThree.Salary);
// console.log(userThree.msg());
// console.log(userThree.helloMsg());

// console.log("#".repeat(20));

// let strOne = "Shady";
// let strTwo = new String("Shady");

// console.log(strOne.constructor === String);
// console.log(strTwo.constructor === String);

// console.log(strOne instanceof String);
// console.log(strTwo instanceof String);

// console.log("#".repeat(20));

// let numOne = 100;
// let numTwo = new Number(100);

// console.log(numOne.constructor === Number);
// console.log(numTwo.constructor === Number);

// console.log(numOne instanceof Number);
// console.log(numTwo instanceof Number);

// ===========================================================

/*
- Static Properties
*/

// class Employee {
//   //Static Properties:
//   static count = 0;
//   // count = 0;
//   constructor(id, userName, Salary) {
//     this.id = id;
//     this.userName = userName;
//     this.Salary = Salary;
//     Employee.count++; // to Count The user
//   }

//   sayhello() {  // Related to The User
//     return `hello I Am User`;
//   }

//   //Static Methods: // Related to The Class
//   static sayhello() {
//     return `hello I Am Class`;
//   }

//   static employeeNumber() {
//     return `${Employee.count} Employee`;
//   }
// }

// let EmployeeOne = new Employee(100, "Shady", 5000);
// let EmployeeTwo = new Employee(101, "Ali", 7000);
// let EmployeeThree = new Employee(102, "Ahemd", 9000);

// console.log(EmployeeOne.id);
// console.log(EmployeeOne.userName);
// console.log(EmployeeOne.Salary);

// console.log(EmployeeOne.count);
// console.log(Employee.count);

// console.log(Employee.sayhello());
// console.log(Employee.employeeNumber());
// console.log(EmployeeOne.sayhello());

// ===========================================================

/*
- Class:
Inheritance
*/

// // Ps\arent Class:
// class User {
//   constructor(id, userName) {
//     this.i = id;
//     this.u = userName;
//     User.userCount++;
//   }
//   sayhello() {
//     return `Hello ${this.u}`;
//   }
// }

// // Derived Class:
// class Admin extends User {
//   constructor(id, userName, Permissions) {
//     super(id, userName);
//     this.p = Permissions;
//   }
// }

// // Derived Class:
// class SuperAdmin extends Admin {
//   constructor(id, userName, Permissions, ability) {
//     super(id, userName, Permissions);
//     this.a = ability;
//   }
// }

// let userOne = new User(100, "Elzero");
// let userTwo = new User(102, "Osama");
// let usertThree = new User(103, "Amgad");

// let adminOne = new Admin(200, "Eslam", 1);
// let adminTwo = new Admin(201, "Hazim", 1);
// let adminThree = new Admin(202, "Alaa", 1);

// let SuperAdminOne = new SuperAdmin(300, "X", 1, "ax");
// let SuperAdminTwo = new SuperAdmin(301, "Y", 1, "ay");
// let SuperAdminThree = new SuperAdmin(302, "Z", 1, "az");

// console.log(userOne.u);
// console.log(userOne.sayhello());

// console.log("#".repeat(20));

// console.log(adminOne.u);
// console.log(adminOne.sayhello());

// console.log(adminTwo.u);
// console.log(adminTwo.sayhello());

// console.log("#".repeat(20));

// console.log(SuperAdminOne.u);
// console.log(SuperAdminOne.sayhello());
// console.log(SuperAdminOne.a);

// console.log(SuperAdminTwo.u);
// console.log(SuperAdminTwo.sayhello());
// console.log(SuperAdminTwo.a);

// ===========================================================

/*
- Encapsulation
*/

// // Parent Class
// class User {
//   #e;
//   constructor(id, userName, eSalary) {
//     this.i = id;
//     this.u = userName;
//     this.#e = eSalary;
//   }
//   salary() {
//     return parseFloat(this.#e);
//   }
// }

// // Derived Class:
// class Admin extends User {
//   constructor(id, userName, eSalary, ability) {
//     super(id, userName, eSalary);
//     this.a = ability;
//   }
// }

// let userOne = new User(100, "Shady", 5000);
// let adminOne = new User(100, "Ali", 15000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.salary() * 0.3);

// console.log("#".repeat(20));

// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.salary() * 0.3);

// ===========================================================

/*

- Add to Prototype Chain
- Extend Built in Constructor

*/

// class User {
//   constructor(id, userName) {
//     this.i = id;
//     this.u = userName;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Shady", 5000);

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };

// Object.prototype.love = "I LOve My Family";

// let myString = "I aM Shady";

// String.prototype.addDots = function (val) {
//   return `.${this}.`;
// };

// console.log(userOne.sayWelcome());
// console.log(String.prototype);
// console.log(String.prototype.addDots(myString));
// console.log(myString.addDots());
// console.log(userOne.u.addDots());

// ===========================================================

/*

-- Object Meta Data And Descriptor

- Writable
- Enumerable
- configurable [Cannot Delete Or Reconfigure]

- console.log(delete myObject.c); // Delete Operator ==> Delete And return [true / flase]

*/

// let myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, "c", {
//   writable: false, // "true" Means That You Can Edit The Value Of The Property
//   enumerable: false, // "true" Means That You Can Loop The Property
//   configurable: false, // // "true" Means That You Can Edit, Delete And Redefine The Property
//   value: 3,
// });

// // If I Cannot Change Any Thing Because [configurable: false]
// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
//   value: 3,
// });

// myObject.c = 200; // It will Not Change Because [writable: false]
// console.log(delete myObject.c); // Delete Operator ==> Delete And return [true / flase]

// // If I Cannot loop on Property c Because [enumerable: false]
// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

// console.log(myObject);

// ===========================================================

/*

-- Object Meta Data And Descriptor
- Define Multiple Properties
- Check Descriptors.

*/

let myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

myObject.a = 10; // will Change Because [writable: true]
myObject.c = 20; // will Not Change Because [writable: false]

for (let x in myObject) {
  console.log(x, myObject[x]);
  // Oitput is : //  Because c, d and e [enumerable: false]
  // a 10
  // b 2
}

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptors(myObject));
