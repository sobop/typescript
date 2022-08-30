"use strict";
// any
// 어떤 타입이어도 상관없는 타입
// 필요하지 않은 경우에는 any는 사용 자제
// const aNumber: number = maybe; // 할당 불가능
if (maybe === true) {
    const aBoolean = maybe;
    // const aString: string = maybe;
    // 이미 boolean 값 할당
}
if (maybe === "string") {
    // const aBoolean: boolean = maybe;
    // 이미 string 값 할당
    const aString = maybe;
}
