
//тестирование DI

class bred
{
    constructor(c){
        this.c = c;
    }

    getHello(){
        //return this.c.Hello();
        return this.c.toString();
    }
}

class HE
{
    Hello(){
        return "hello";
    }
}

var t = new HE();

console.log(t.toString());

exports = module.exports = {bred, HE}
