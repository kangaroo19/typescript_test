function getText<T>(text:T):void{
    console.log(text)
}

// getText<string>('hi')
// getText<number>(10)
// getText<any>(true)

//제너릭이란 타입을 마치 함수의 파라미터처럼 사용 할 수 있는 문법
//<>을 사용하여 변수의 타입을 동적으로 할당 가능
//getText함수처럼 <T>로 파라미터와 리턴 값의 타입을 T로 
//설정해주면 함수 호출 시 파라미터의 타입에 따라 다르게 사용 가능

//재사용 가능한 클래스,함수를 만들기 위해 사용한다


const identify1=(arg:number):number=>{
    return arg
}

const identify2=(arg:any):any=>{
    return arg
}

//제너릭을 쓰지 않는다면 2가지 경우 존재
//1)타입을 미리 지정 
//  ==>확실한 타입체크가 이뤄질 수 있겠지만 항상 number타입 사용해야함
//  ==>범용성 떨어짐
//2)타입을 any로 지정
//  ==>자료의 타입 제한 할 수 없음
//  ==>이 함수 통해 어떤 타입의 데이터가 리턴되는지 알 수 없음

const identify3=<T>(arg:T):T=>{ //제너릭 사용 함수
    // console.log(arg.length)
    // 입력값과 리턴값의 타입을 동일하게 정했으므로
    // 인자에 length 프로퍼티 사용못하는 number타입이
    // 들어왔을때는 유효하지 않기 때문
    return arg
}

console.log(identify3<number>(1))