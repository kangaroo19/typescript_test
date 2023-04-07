"use strict";
//tsc 파일이름 ==> 컴파일 진행 후 js파일 생성
//tsconfig.json에서 rootdir와 outdir를 지정해주면 파일이름 안써도됨
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoConsole_1 = __importDefault(require("./view/TodoConsole"));
const todoConsole = new TodoConsole_1.default();
// console.log(todoConsole.displayTodoList())
todoConsole.promptUser();
