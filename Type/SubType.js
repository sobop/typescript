"use strict";
// SubType
// sub1 타입은 sup1 타입의 서브 타입
let sub1 = 1;
let sup1 = sub1;
// sub1 = sup1;  // Error
// sub2 타입은 sup2 타입의 서브 타입
let sub2 = [1];
let sup2 = sub2;
// sub2 = sup2;  // Error
// sub3 타입은 sup3 타입의 서브 타입
let sub3 = [1, 2];
let sup3 = sub3;
// sub3 = sup3;  // Error
// sub4 타입은 sup4 타입의 서브 타입
let sub4 = 1;
let sup4 = sub4;
// sub4 = sup4;  // Error
// sub5 타입은 sup5 타입의 서브 타입
let sub5 = 0;
let sup5 = sub5;
// sub5 = sup5;  // Error
class Animal {
}
class Dog extends Animal {
    eat() { }
}
// sub6 타입은 sup6 타입의 서브 타입
let sub6 = new Dog();
let sup6 = sub6;
// sub6 = sup6;  // Error
