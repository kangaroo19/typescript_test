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