"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}
const iperson = new Person("Lee");
iperson.hello();
const k = {
    name: "Lee",
    city: "Yongin",
};
const helloPerson = function (name) {
    // age: number를 넣으면 에러
    console.log(`안녕하세요! ${name} 입니다.`);
};
helloPerson("Lee", 25); // 문제 없음
const p81 = {
    name: "Lee",
    gender: "male",
};
// p81.gender = "female";  // Error
