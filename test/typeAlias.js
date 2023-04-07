"use strict";
const n = 10;
const testUser = { name: 'kim', age: 20 };
//age에 스트링값이 들어가면 오류나옴
//타입 엘리아스 없을때
function printInfo1(user) {
    console.log(user.name, user.age);
}
//타입 엘리아스 있을때
function printInfo2(user) {
    console.log(user.name, user.age);
}
function fn1(value) {
    console.log(value);
}
let a = { value: 123 };
fn1(a);
var Lan;
(function (Lan) {
    Lan["korean"] = "ko";
    Lan["english"] = "eng";
})(Lan || (Lan = {}));
const code = Lan.korean;
console.log(code);
