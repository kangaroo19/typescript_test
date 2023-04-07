//model은 db나 파일과 같은 데이터 소스를 제어한 후 결과리턴
//데이터를 가진 객체를 모델이라고 지칭

class TodoItem{
    // 접근지정자 지정가능 (public,private,protected)
    constructor(public id:number, public task:string, public complete:boolean=false,){
        this.id=id
        this.task=task
        this.complete=complete
    }

    printDetails() : void{ //리턴값 없을때는 리턴타입 void로 지정
        console.log(`${this.id}\t${this.task}\t${this.complete ? '\t{complete} ': "" }`)
    }
}

export default TodoItem