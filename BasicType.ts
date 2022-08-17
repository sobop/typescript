// boolean
let isDone: boolean = false;
isDone = true;
console.log(typeof isDone);
let isOk: boolean = true;

// number
let decimal: number = 6; // 10진수
let hex: number = 0xf00d; // 16진수
let binary: number = 0b1010; // 2진수
let octal: number = 0o744; // 8진수
let NotANumber: number = NaN; // NaN은 숫자로 취급
let underscoreNum: number = 1_000_000;

// string
let fullName: string = "Lee Young Seop";
let age: number = 25;
// + 기호 안쓰면서 간단하게 출력 가능
let sentence: string = `Hello, My name is ${fullName}.
I'll be ${age + 1} years old next month.`;
console.log(sentence);

// symbol 고유하고 수정 불가능
console.log(Symbol("foo") === Symbol("foo")); // false
const sym = Symbol();
const obj = {
  [sym]: "value",
};
console.log(obj[sym]);

// null & undefined

// let n: string = null;
// let u: undefined = null;
let v: void = undefined;
let union: string | null = null;
