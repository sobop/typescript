"use strict";
function hello2(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
hello2({ name: "Lee", age: 25 });
hello2({ name: "Lee" }); // 없어도 가능
function hello3(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p31 = {
    name: "Lee",
    age: 25,
};
const p32 = {
    name: "Kim",
    friends: ["Oh", "Park", "Bae"],
};
const p33 = {
    name: "Kim",
    father: p31,
    mother: p32,
};
const p41 = {
    name: "Lee",
    age: 25,
    hello: function () {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    },
};
const p42 = {
    name: "Lee",
    age: 25,
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    },
};
p41.hello();
p42.hello();
// const p43: Person4 = {
//   name: "Lee",
//   age: 25,
//   hello: (): void => {
//     // this 불가
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   },
// };
