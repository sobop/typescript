"use strict";
class CPerson {
    constructor(age) {
        // 클래스 프로퍼티를 사전 선언하여야 한다
        this.name = "Lee";
        // 클래스 프로퍼티수에 값을 할당
        this.age = age;
    }
}
const p1 = new CPerson(39);
console.log(p1);
console.log(p1.age);
