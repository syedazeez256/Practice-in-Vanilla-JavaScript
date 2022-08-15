// // Creating object
// const azeez = {
//   airline: "Pak air lines",
//   iataCode: "PK",
//   bookings: [],
//   book(flightnum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightnum}`, name });
//   },
// };
// // creating the new onject
// const eurowrings = {
//   airline: "Eurowings",
//   iataCode: "LW",
//   bookings: [],
// };
// console.log(azeez.book(23, "Azez"));

// // gettting the property of object
// const airline = ["airline"];
// console.log(eurowrings[airline]);

// // deleting the property of Object
// // delete eurowrings.iataCode;
// // console.log(eurowrings);

// // simply calling the object property method
// azeez.book(23, "Azeez");
// console.log(azeez);

// // stored in new variable and make it a simple function
// const book = azeez.book;
// const arrAirlines = [456, "Qasim"];

// // call method
// book.call(eurowrings, 23, "haider");

// // apply method
// book.apply(azeez, arrAirlines);

// // bind method
// const bookEW = book.bind(eurowrings);
// const bookPK = book.bind(azeez);
// bookEW(23, "Azam");
// bookPK(34, "Aziz");
// console.log(eurowrings);
// const bookEW23 = book.bind(eurowrings, 99);
// bookEW23("Pakistan");

// // creating another Object
// myObj = {
//   name: "John",
//   age: 30,
//   cars: {
//     car1: "Ford",
//     car2: "BMW",
//     car3: "Fiat",
//   },
// };

// console.log(myObj.cars.car2);
// console.log(myObj.cars["car3"]);

// // Arrays in Objects / Nested Arrays and objects
// const anotherObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// // To access arrays inside arrays, use a for-in loop for each array:
// let x;
// for (let i in anotherObj.cars) {
//   x += "<h1>" + anotherObj.cars[i].name + "</h1>";
//   for (let j in anotherObj.cars[i].models) {
//     x += anotherObj.cars[i].models[j];
//   }
// }

// console.log(x);

// // creating the new onject
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// // looping in Object
// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }

// console.log(txt);

// // converted the Object to array
// const person1 = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// const myArray = Object.values(person1);
// console.log(myArray);

// // Getters and Setters

// // Create an object:
// const person2 = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",
//   get lang() {
//     return this.language;
//   },
//   set lang(lng) {
//     this.language = lng;
//   },
// };

// person2.language = "EE";

// console.log(person2.lang);
// console.log(person2.language);

// // Define object
// const obj = { counter: 0 };

// // Define setters and getters
// Object.defineProperty(obj, "reset", {
//   get: function () {
//     this.counter = 0;
//   },
// });
// Object.defineProperty(obj, "increment", {
//   get: function () {
//     this.counter++;
//   },
// });
// Object.defineProperty(obj, "decrement", {
//   get: function () {
//     this.counter--;
//   },
// });
// Object.defineProperty(obj, "add", {
//   set: function (value) {
//     this.counter += value;
//   },
// });
// Object.defineProperty(obj, "subtract", {
//   set: function (value) {
//     this.counter -= value;
//   },
// });
// console.log({ obj: obj.__proto__ });
// // Play with the counter:
// obj.reset;
// obj.add = 5;
// obj.subtract = 3;
// obj.increment;
// obj.decrement;

// console.log(obj);

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// console.log(myFather.lastName);

// function Person1(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// }

// Person1.prototype.nationality = "English";
// console.log(new Person1().__proto__);

// // The Arguments Object
// x = findMax(1, 123, 500, 115, 44, 88);

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }

// const obj = {
//   a: 10,
//   b: "azeez",
//   c: () => {
//     console.log("-------", this);
//   },
// };

// obj.c();
// const arrow = () => {
//   console.log(this);
// };
// console.log(arrow);

const arr = [1, "a", "b", 0, 15];

let arr1 = [];

function filter_list(data) {
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      arr1.push(data[i]);
    }
  }
  // return arr1;
}

filter_list(arr);
console.log(arr1);
