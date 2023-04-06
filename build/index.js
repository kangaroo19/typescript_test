"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//tsc 파일이름 ==> 컴파일 진행 후 js파일 생성
//tsconfig.json에서 rootdir와 outdir를 지정해주면 파일이름 안써도됨
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data_1 = require("./data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const sampleTodos = data_1.data.map(//TodoItem이 들어가있는 배열
(item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default('my todo list', sampleTodos);
myTodoCollection.addTodo('Java 학습하기');
myTodoCollection.addTodo('html 학습하기');
myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.removeComplete();
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log("------------------------");
