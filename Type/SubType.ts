// SubType

// sub1 타입은 sup1 타입의 서브 타입
let sub1: 1 = 1;
let sup1: number = sub1;
// sub1 = sup1;  // Error

// sub2 타입은 sup2 타입의 서브 타입
let sub2: number[] = [1];
let sup2: object = sub2;
// sub2 = sup2;  // Error

// sub3 타입은 sup3 타입의 서브 타입
let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
// sub3 = sup3;  // Error

// sub4 타입은 sup4 타입의 서브 타입
let sub4: number = 1;
let sup4: any = sub4;
// sub4 = sup4;  // Error

// sub5 타입은 sup5 타입의 서브 타입
let sub5: never = 0 as never;
let sup5: number = sub5;
// sub5 = sup5;  // Error

class Animal {}
class Dog extends Animal {
  eat() {}
}
// sub6 타입은 sup6 타입의 서브 타입
let sub6: Dog = new Dog();
let sup6: Animal = sub6;
// sub6 = sup6;  // Error
