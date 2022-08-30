interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

const iperson: IPerson1 = new Person("Lee");
iperson.hello();

interface IPerson2 {
  name: string;
  age?: number;
}

interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: "Lee",
  city: "Yongin",
};

interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) {
  // age: number를 넣으면 에러
  console.log(`안녕하세요! ${name} 입니다.`);
};

helloPerson("Lee", 25); // 문제 없음

interface IPerson3 {
  name: string;
  age?: number;
  readonly gender: string; // readonly = 한번 만들면 바꿀수없는 값
}

const p81: IPerson3 = {
  name: "Lee",
  gender: "male",
};

// p81.gender = "female";  // Error
