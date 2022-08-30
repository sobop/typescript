interface Person1 {
  name: string;
  age: number;
}
interface Person2 {
  name: string;
  age?: number; // ? : 프로퍼티를 모를때는 사용
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({ name: "Lee", age: 25 });
hello2({ name: "Lee" }); // 없어도 가능

interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; // 어떤 프로퍼티를 사용할때 사용
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: "Lee",
  age: 25,
};

const p32: Person3 = {
  name: "Kim",
  friends: ["Oh", "Park", "Bae"],
};

const p33: Person3 = {
  name: "Kim",
  father: p31,
  mother: p32,
};

interface Person4 {
  name: string;
  age?: number;
  hello(): void;
}

const p41: Person4 = {
  name: "Lee",
  age: 25,
  hello: function (): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  },
};

const p42: Person4 = {
  name: "Lee",
  age: 25,
  hello(): void {
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
