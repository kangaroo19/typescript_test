"use strict";
class Site {
    constructor(no, url) {
        this.no = no;
        this.url = url;
    }
    getNo() {
        return this.no;
    }
}
const Webisfree = new Site(1, 'webisfree.com');
function fn1(a) {
    return a;
}
console.log(fn1(Webisfree));
