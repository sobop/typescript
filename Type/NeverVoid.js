"use strict";
// never
// 어떤 타입이어도 상관없는 타입
// 어떠한 것도 할당 불가능
let a = "hello";
if (typeof a !== "string") {
    a; // never
}
if (typeof b !== "string") {
    b; // number
}
// ex)
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
// void (잘 안씀)
function retrunVoid(message) {
    console.log(message);
    return undefined;
}
