"use strict";
//model은 db나 파일과 같은 데이터 소스를 제어한 후 결과리턴
//데이터를 가진 객체를 모델이라고 지칭
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    // 접근지정자 지정가능 (public,private,protected)
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? '\t{complete} ' : ""}`);
    }
}
exports.default = TodoItem;
