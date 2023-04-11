//인터페이스 이름은 대문자로 시작

//typescript에서 object타입을 선언 할 때 interface사용

let user:object={
    name:'ryan',
    age:14
}
// console.log(user.name) Error!

interface UserInfo{
    name:string,
    age:number,
}

const myUser:UserInfo={
    name:'jaehyun',
    age:25
}
// console.log(user.name)


let studentId:number=12345
let studentName:string='jaehyun'
let age:number=25
let gender:string='female'
let subject:string='javascript'
let courseCompleted:boolean=false

//enum은 연관된 아이템들을 함께묶어서 표현할 수 있는 수단

enum GenderType{
    Male='male',
    Female='female',
    TransGender='transgender',
}

interface Student { 
    readonly studentId:number
    //읽기전용 프로퍼티는 수정불가
    studentName:string
    age?:number
    gender:GenderType
    subject:string
    couseCompleted:boolean
    addComment?(comment:string):string
    // addComment?:(comment:string)=>string
    //인터페이스에서 메소드도 정의가능
}

function getStudentDetails(studentId:number):Student{
    return {
        studentId:12345,
        studentName:'jaehyun',
        // age:25,
        gender:GenderType.Female,
        subject:'javascript',
        couseCompleted:false
    }
}

//반환값에 age프로퍼티를 지우면 오류남
//Student 인터페이스에서 정의된 모든 프로퍼티
//리턴값에 포함되어야함
//or 조건부 기호인 ? 붙이면 해당 프로퍼티는 잇어도되고 없어도됨

function saveStudentDetails(student:Student):void{
    // console.log(student.studentId++) 
    //studentid 프로퍼티는 읽기전용이기 때문에 수정불가
    console.log(student)
}

const student1={
    studentId:12345,
    studentName:'jaehyun',
    // age:25, age는 조건부 프로퍼티라 있어도 되고 없어도됨
    gender:GenderType.Female,
    subject:'javascript',
    couseCompleted:false}

saveStudentDetails(student1)
