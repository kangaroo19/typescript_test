//tsc 파일이름 ==> 컴파일 진행 후 js파일 생성
//tsconfig.json에서 rootdir와 outdir를 지정해주면 파일이름 안써도됨

import TodoConsole from "./view/TodoConsole";


const todoConsole=new TodoConsole()
// console.log(todoConsole.displayTodoList())
todoConsole.promptUser()