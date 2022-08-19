// Aliasing Primitive

type MyStringType = string;
const str = "world";
let myStr: MyStringType = "hello";
myStr = str;

// Aliasing Union Type

let person: string | number = 0;
person = "Lee";

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = "Kim";

// Aliasing Tuple

let person3: [string, number] = ["Lee", 25];
type PersonTuple = [string, number];
let another3: PersonTuple = ["Kim", 20];

// Aliasing Function
type EatType = (food: string) => void;
