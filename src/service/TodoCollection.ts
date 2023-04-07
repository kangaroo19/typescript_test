//controller는 사용자가 요청한 웹페이지를
//서비스하기 위해 모델을 호출

import TodoItem from "../model/TodoItem"
import { ItemCounts } from "../model/itemCounts"

class TodoCellection{
    private nextId:number=1
    private itemMap:Map<number,TodoItem>
    constructor(public userName:string,todoItems:TodoItem[]=[]){
        this.itemMap=new Map<number,TodoItem>()
        todoItems.forEach((item)=>{
            this.itemMap.set(item.id,item)
        })
    }
    getTodoById(id:number):TodoItem | undefined{
        return this.itemMap.get(id)
    }

    addTodo(task:string):number{
        while(this.getTodoById(this.nextId)){
            this.nextId++
        }
        this.itemMap.set(this.nextId,new TodoItem(this.nextId,task))
        return this.nextId
    }
    //includeComplete => true : 모든 할 일 목록
    //includeComplete => fasle : 완료 목록 제외한 할 일 목록
    getTodoItems(includeComplete:boolean):TodoItem[]{
        return [...this.itemMap.values()].filter((item)=>
            includeComplete || !item.complete
        )
    }

    removeComplete():void{
        this.itemMap.forEach((item)=>{
            if(item.complete){
                this.itemMap.delete(item.id)
            }
        })
    }

    getItemCounts() : ItemCounts{
        return {
            total:this.itemMap.size, //모든 할 일 목록 개수
            inComplete:this.getTodoItems(false).length //완료되지 않은 할 일 목록 개수
        }
    }

    markComplete(id:number,complete:boolean):void{
        const todoItem=this.getTodoById(id)
        if(todoItem){
            todoItem.complete=complete
        }

    }
}

export default TodoCellection