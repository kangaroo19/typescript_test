import * as inquirer from "inquirer"
import TodoCellection from "../service/TodoCollection"
import TodoItem from "../model/TodoItem"
import {data} from '../data'
import { Command } from "../model/Command"
class TodoConsole{
    private todoCollection : TodoCellection
    private showCompleted : boolean
    constructor(){
        this.showCompleted=true
        const sampleTodos : TodoItem[]=data.map(
            (item)=>new TodoItem(item.id,item.task,item.complete)
        )
        this.todoCollection=new TodoCellection('My Todo Lists',sampleTodos)
    }
    
    displayTodoList():void{
        console.log(
            `===${this.todoCollection.userName}===(${this.todoCollection.getItemCounts().inComplete} items todo)`
        )
        this.todoCollection
            .getTodoItems(this.showCompleted)
            .forEach(
            (item)=>item.printDetails())
    }

    promptUser():void{
        console.clear()
        this.displayTodoList()

        inquirer.prompt({
            type:'list',
            name:'command',
            message:'choose option',
            choices: Object.values(Command)
        })
        .then((answers)=>{
            switch(answers['command']){
                case Command.Toggle:
                    this.showCompleted=!this.showCompleted
                    this.promptUser()
                    break
                case Command.Add:
                    this.promptAdd()
                    break 
                case Command.Purge:
                    this.todoCollection.removeComplete()
                    this.promptUser()
                    break
                case Command.Complete:
                    if(this.todoCollection.getItemCounts().inComplete>0){
                        this.promptComplete()
                    }
                    else{
                        this.promptUser()
                    }
                    break;
            }
        })
    }
    promptAdd():void{
        console.clear()
        inquirer.prompt({
            type:'input',
            name:'add',
            message:'enter task'
        }).then((answers)=>{
            if(answers['add']!==""){
                this.todoCollection.addTodo(answers['add'])
            }
            this.promptUser()
        })
    }

    promptComplete():void{
        console.clear()
        inquirer.prompt({
            type:"checkbox",
            name:"complete",
            message:"mark Tasks Complete",
            choices:this.todoCollection.getTodoItems(this.showCompleted).map((item)=>({
                name:item.task,
                value:item.id,
                checked:item.complete,
            }))
        }).then((answers)=> {
            let completedTasks=answers['complete'] as number[]
            this.todoCollection.getTodoItems(true).forEach((item)=> 
                this.todoCollection.markComplete(
                    item.id,
                    completedTasks.find((id)=>id===item.id) !=undefined
                )
            )
            this.promptUser()
        })
    }
}

export default TodoConsole