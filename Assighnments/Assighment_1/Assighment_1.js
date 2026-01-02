console.log("#".repeat(30));
console.log(
  "%cObject Oriented Programming|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_1

// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now"`;
  }
  stop() {
    return `Car Is Stopped"`;
  }
}

let carOne = new Car("MG", 2022, 420000);

console.log(
  `Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`
);

console.log(carOne.run());

// Needed Output
//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now";
