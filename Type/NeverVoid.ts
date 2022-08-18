// never
// 어떤 타입이어도 상관없는 타입
// 어떠한 것도 할당 불가능

let a: string = "hello";

if (typeof a !== "string") {
  a; // never
}

declare const b: string | number;

if (typeof b !== "string") {
  b; // number
}

// ex)
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

// void (잘 안씀)
