// object
const person1 = { name: "Lee", age: 25 }; // object type 아님

const person2 = Object.create({ name: "Lee", age: 25 });

// ex1)

let obj1: object = {};
obj1 = { name: "Lee" };
obj1 = [{ name: "Lee" }];

// Error

// obj1 = 25;
// obj1 = "Lee";
// obj1 = "true";
// obj1 = "null";

// ex2)

declare function create(o: object | null): void;
create({ prop: 1 });
create(null);

// Error

// create(15);
// create(false);

// array
let list1: number[] = [1, 2, 3];
let list2: (number | string)[] = [1, 2, 3, "4"];

// tuple
let x: [string, number]; // 형식에 맞지않으면 Error 출력

x = ["Hi", 10];

// Error

// x = [10, "Hi"];
// x = [2];

let [first, second] = x;
// let [first, second, third] = x;
