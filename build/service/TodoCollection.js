"use strict";
//controller는 사용자가 요청한 웹페이지를
//서비스하기 위해 모델을 호출
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("../model/TodoItem"));
class TodoCellection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.nextId = 1;
        this.itemMap = new Map();
        todoItems.forEach((item) => {
            this.itemMap.set(item.id, item);
        });
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
    addTodo(task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem_1.default(this.nextId, task));
        return this.nextId;
    }
    //includeComplete => true : 모든 할 일 목록
    //includeComplete => fasle : 완료 목록 제외한 할 일 목록
    getTodoItems(includeComplete) {
        return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete);
    }
    removeComplete() {
        this.itemMap.forEach((item) => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            inComplete: this.getTodoItems(false).length //완료되지 않은 할 일 목록 개수
        };
    }
    markComplete(id, complete) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
}
exports.default = TodoCellection;
