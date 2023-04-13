//union type은 타입 선언에 하나 이상의 타입을 지정하고
//해당 타입 중에 하나일 수 있음을 나타냄
//union type은 | 연산자 이용해 정의
//

let collection : number[] | string="123"

//union type 을 사용함으로써 문자열과 숫자 동시에 가지는 배열 선언가능
let array:(string|number)[]=['Apple',1,2,'Banana']


