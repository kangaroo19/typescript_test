//타입 엘리아스
//새로운 타입을 정의하는 방법
type Mynumber = number;
const n : Mynumber =10

type User = {name:string,age:number}
const testUser:User={name:'kim',age:20}

//age에 스트링값이 들어가면 오류나옴

//타입 엘리아스 없을때
function printInfo1(user:{name:string,age:number}){
    console.log(user.name,user.age)
}
//타입 엘리아스 있을때
function printInfo2(user:User){
    console.log(user.name,user.age)
}

type Container<T> = {value:T} //제너릭도 사용가능

function fn1(value:Container<number>){
    console.log(value)
}
let a={value:123}
fn1(a)

enum Lan{
    korean='ko',
    english='eng'
}

const code :Lan=Lan.korean
console.log(code)