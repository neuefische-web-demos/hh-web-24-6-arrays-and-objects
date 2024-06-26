//////////////////////
//   Arrays         //
//////////////////////

// Arrays (data type) put data in brackets
// sequence of data types
// []
// Lists

//                       0       1         2          3           4
const shoppingList = ["apple", "milk", "cookies", "banana", "strawberry"];
// console.log("shoppingList: ", shoppingList);

// // log the first thing in my list
// console.log("first thing?: ", shoppingList[0]);

// // how many things in my array?
// console.log("how many things?", shoppingList.length);

// // mixed arrays
// const diverseArray = [1, 2, "hello world", false];
// const complexArray = [1, 2, [42, 2, 3]];

// console.log(complexArray[2][0]);
// console.log("shoppingList: ", shoppingList);

// reassign the value of something in the array
// shoppingList[0] = "Lots of Apples";

// console.log("shoppingList: ", shoppingList);

// we can remove something from the end of the array
// shoppingList.pop();
// console.log("after pop: ", shoppingList);
// we can add something to the end of the array.

// shoppingList.push("Lint roller");
// console.log("shoppingList: ", shoppingList);

// break time

// meet back at 10:00

// How do you make a developer cheer?

// ["hip", "hip"]

//////////////////////
//   Objects        //
//////////////////////

// other languages like to call these dictionaries

// const person = {
//   name: "Peter Anderson",
//   age: 40,
//   isEmbarrassed: true,
// };

// // we can use the dot notation
// console.log("person.name: ", person.name);
// console.log("person.age: ", person.age);

// // we can also use the square bracket notation
// console.log("person['name']: ", person["name"]);

// const person = {
//   name: "Peter Anderson",
//   age: 40,
//   isEmbarrassed: true,
//   address: {
//     street: "Berliner Str",
//     houseNumber: 42,
//     city: "Norden",
//   },
// };

// person.address.postCode = 12345;

// // console.log("city? : ", person.address.city);

// person.isEmbarrassed = false;

// console.log("person after reassignment", person);

// // we can add key value pairs that dont exist
// person.numberOfChildren = 3;

// console.log("person after adding children: ", person);

// // we can also delete keys and values from an object

// delete person.age;

// console.log("person after deleting age: ", person);

const peopleArray = [
  {
    name: "John",
    age: 22,
  },
  {
    name: "Alex",
    age: 33,
  },
];

console.log("Alex?", peopleArray[1].name);

const user = {
  userId: "1234",
  mail: "test@mail.com",
  shoppingCart: ["tomato", "banana", "chocolate"],
};

console.log("tomato?: ", user.shoppingCart[0]);
