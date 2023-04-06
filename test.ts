class Site{
    no:number
    url:string
    constructor(no:number,url:string){
        this.no=no
        this.url=url
    }
    getNo(){
        return this.no
    }
}

const Webisfree=new Site(1,'webisfree.com')

function fn1(a:any):Site{
    return a
}

console.log(fn1(Webisfree))