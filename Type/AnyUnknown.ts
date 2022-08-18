// any
// 어떤 타입이어도 상관없는 타입
// 필요하지 않은 경우에는 any는 사용 자제

// unknown
// any와 같이 아무거나 할당가능
// any 보다 안전
// 타입을 추론할 수 있게 유형을 좁히거나 확정해주지 않으면 할당 불가능

declare const maybe: unknown;

// const aNumber: number = maybe; // 할당 불가능

if (maybe === true) {
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
  // 이미 boolean 값 할당
}

if (maybe === "string") {
  // const aBoolean: boolean = maybe;
  // 이미 string 값 할당

  const aString: string = maybe;
}
