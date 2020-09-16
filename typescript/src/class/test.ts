class Person1 {
    private a: string;

    constructor(a: string) {
        this.a = a;
    }
}

class Girl extends Person1 {
    constructor(a: string) {
        super(a);
    }
}


class Man extends Person1 {
    constructor(a: string) {
        super(a);
    }
}

// new (a: string) => Person1
// P 的类型应该是Person1的类型
// P: Person1 表示用Person1约束P， P是Person1的实例
// P: typeof Person1 表示用Person1的类型约束P，P是一个类，拥有跟Person1相同的构造函数，实例等
function createInstance(P: typeof Person1) {
    return new P(a);
}

createInstance(Girl);

// p实例的类型是Person1
function consoleInstance(p: Person1) {
    console.log(p);
}

const girl = new Girl('a');
consoleInstance(girl);