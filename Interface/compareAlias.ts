// function
type EatType1 = (food: string) => void;

interface IEat {
  (food: string): void;
}

// array
type List = string[];

interface IList {
  [index: number]: string;
}

// intersection

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface Data {
  data: { name: string }[];
}
// type alias
type ResponseType1 = Data & ErrorHandling;
// interface
interface IResponse extends Data, ErrorHandling {}

// union types
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

// interface IPet extends PetType {}  // Error
// class Pet implements PetType {}    // Error

// Merging
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}
let mi: MergingInterface; // 같은 인터페이스를 만들면 합쳐짐

// type alias는 안됨
