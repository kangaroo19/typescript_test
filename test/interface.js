"use strict";
//인터페이스 이름은 대문자로 시작
//typescript에서 object타입을 선언 할 때 interface사용
let user = {
    name: 'ryan',
    age: 14
};
const myUser = {
    name: 'jaehyun',
    age: 25
};
// console.log(user.name)
let studentId = 12345;
let studentName = 'jaehyun';
let age = 25;
let gender = 'female';
let subject = 'javascript';
let courseCompleted = false;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["TransGender"] = "transgender";
})(GenderType || (GenderType = {}));
function getStudentDetails(studentId) {
    return {
        studentId: 12345,
        studentName: 'jaehyun',
        // age:25,
        gender: GenderType.Female,
        subject: 'javascript',
        couseCompleted: false
    };
}
//반환값에 age프로퍼티를 지우면 오류남
//Student 인터페이스에서 정의된 모든 프로퍼티
//리턴값에 포함되어야함
//or 조건부 기호인 ? 붙이면 해당 프로퍼티는 잇어도되고 없어도됨
function saveStudentDetails(student) {
    // console.log(student.studentId++) 
    //studentid 프로퍼티는 읽기전용이기 때문에 수정불가
    console.log(student);
}
const student1 = {
    studentId: 12345,
    studentName: 'jaehyun',
    // age:25, age는 조건부 프로퍼티라 있어도 되고 없어도됨
    gender: GenderType.Female,
    subject: 'javascript',
    couseCompleted: false
};
saveStudentDetails(student1);
//enum은 연관된 아이템들을 함께묶어서 표현할 수 있는 수단
