"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
const TodoCollection_1 = __importDefault(require("../service/TodoCollection"));
const TodoItem_1 = __importDefault(require("../model/TodoItem"));
const data_1 = require("../data");
const Command_1 = require("../model/Command");
class TodoConsole {
    constructor() {
        this.showCompleted = true;
        const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
        this.todoCollection = new TodoCollection_1.default('My Todo Lists', sampleTodos);
    }
    displayTodoList() {
        console.log(`===${this.todoCollection.userName}===(${this.todoCollection.getItemCounts().inComplete} items todo)`);
        this.todoCollection
            .getTodoItems(this.showCompleted)
            .forEach((item) => item.printDetails());
    }
    promptUser() {
        console.clear();
        this.displayTodoList();
        inquirer.prompt({
            type: 'list',
            name: 'command',
            message: 'choose option',
            choices: Object.values(Command_1.Command)
        })
            .then((answers) => {
            switch (answers['command']) {
                case Command_1.Command.Toggle:
                    this.showCompleted = !this.showCompleted;
                    this.promptUser();
                    break;
                case Command_1.Command.Add:
                    this.promptAdd();
                    break;
                case Command_1.Command.Purge:
                    this.todoCollection.removeComplete();
                    this.promptUser();
                    break;
                case Command_1.Command.Complete:
                    if (this.todoCollection.getItemCounts().inComplete > 0) {
                        this.promptComplete();
                    }
                    else {
                        this.promptUser();
                    }
                    break;
            }
        });
    }
    promptAdd() {
        console.clear();
        inquirer.prompt({
            type: 'input',
            name: 'add',
            message: 'enter task'
        }).then((answers) => {
            if (answers['add'] !== "") {
                this.todoCollection.addTodo(answers['add']);
            }
            this.promptUser();
        });
    }
    promptComplete() {
        console.clear();
        inquirer.prompt({
            type: "checkbox",
            name: "complete",
            message: "mark Tasks Complete",
            choices: this.todoCollection.getTodoItems(this.showCompleted).map((item) => ({
                name: item.task,
                value: item.id,
                checked: item.complete,
            }))
        }).then((answers) => {
            let completedTasks = answers['complete'];
            this.todoCollection.getTodoItems(true).forEach((item) => this.todoCollection.markComplete(item.id, completedTasks.find((id) => id === item.id) != undefined));
            this.promptUser();
        });
    }
}
exports.default = TodoConsole;
