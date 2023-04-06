//tsc 파일이름 ==> 컴파일 진행 후 js파일 생성
//tsconfig.json에서 rootdir와 outdir를 지정해주면 파일이름 안써도됨
import TodoItem from "./TodoItem"
import { data } from "./data"
import TodoCellection from "./TodoCollection"

const sampleTodos : TodoItem[]=data.map( //TodoItem이 들어가있는 배열
    (item)=>new TodoItem(item.id,item.task,item.complete)
)
const myTodoCollection = new TodoCellection('my todo list',sampleTodos)

myTodoCollection.addTodo('Java 학습하기')
myTodoCollection.addTodo('html 학습하기')
myTodoCollection.markComplete(3,true)
console.log(`${myTodoCollection.userName}`)

myTodoCollection.removeComplete()
myTodoCollection.getTodoItems(true).forEach((item)=>item.printDetails())
console.log("------------------------")
