type prop = {
    label: number,
    // [proName: string]: any,
};
function test(obj: prop): void {}

let obj = { label: 1, value: 2, };
test(obj);
test({ label: 1 });

// { label: 1, value: 2 } 对象字面量赋值给变量或则当参数传递时，会做 额外的属性检查 ，不同将会报错
// test({ label: 1, value: 2 });
// let aaa1: prop = { label: 1, value: 2, };
//  可以用类型断言绕开检查
let aaa: prop = { label: 1, value: 2, } as prop;
// 将对象字面量赋值给一个变量
let obj1= { label: 1, value: 2, };
aaa = obj1;
// 在定义类型时通过字符串索引签名 [proName: string]: any, 表示除label属性外，可以存在任意类型的属性
aaa = {
    label: 1,
    // a: 1,
    // b: true,
    // c: 'a',
};

// 可选属性
interface Point {
    x: number,
    y: number,
    z?: number,
}


// 只读属性，对象属性值初始化之后无法修改
// const 定义的属性，如果是个对象，对象的属性值还是可以改变的
interface circle {
    radius: number,
    readonly PI: number,
    // 字符串索引签名 用在一些未知属性的对象中
    [proName: string]: any, 
}

// 只读数组
let arr1: ReadonlyArray<number> = [1,2,3,4,5];
// arr1[0] = 1;

let c1: circle = {
    radius: 12,
    PI: 3.14,
    area: 1,
};

c1.radius = 1;
// c1.PI = 3.1415;

// 函数类型
type testfn = {
    (first: string, last: string): boolean,
};

// 声明的函数可以不需要指定类型，会根据type推断
let fn: testfn = (f, l) => {
    if (f === 'f') return false;
    else return true;
}

console.log(fn('1', '1'));

// 可索引类型
interface StringArray {
    [index: number]: string;
}
  
let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animal {
    name: string | undefined;
}
class Dog extends Animal {
    breed: string | undefined;
}

// 在同一个类型定义中，数字索引会转化成字符串索引,
// 所以数字索引的返回值必须是字符串索引的子类或相同
interface NotOkay {
    // [x: number]: Animal;
    [x: number]: Dog,
    [x: string]: Dog,
}

interface NumberDictionary {
    // 定义了一个字符串索引 通过索引拿到的一定是number类型
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
    name: number,
}
let object: NumberDictionary = {
    aa: 1,
    cc: 2,
    // dd: '2',
    name: 1,
    length: 4,
};

console.log(object.name)
console.log(object.length)

// 类类型
interface Persion {
    ID: number,
    name: string,
    age: number,
    getStudentName(): string,
}

class Student implements Persion {
    ID: number;
    name: string;
    age: number;

    constructor(ID: number, name: string, age: number) {
        this.ID = ID;
        this.name = name;
        this.age = age;
    }

    getStudentName(): string {
        return this.name;
    };
}

let student: Student = new Student(1, 'bob', 15);
console.log(student.getStudentName());

// interface ClockConstructor {
//     new (hour: number, minute: number): Object;
// }

// class Clock implements ClockConstructor {
//     // currentTime: Date | undefined;
//     constructor(h: number, m: number) { }
// }

// ts 只对实例部分检查，静态部分不检查
// constructor属于静态部分
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

// ClockConstructor 约束的是构造器的参数和返回值
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {
    }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {
    }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// 继承 接口可以多继承, 用都好隔开
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 接口继承类
// 能继承类的private和protected属性，private属性只能被自身访问，protected属性只能被子类和自身访问
// 这也就意味着，实现这个接口的类必须是接口继承类的子类或自身

interface Example {
    diff(one: string, two?: string, three?: boolean): number;
}

function fn111(x: (a: string, b: number, c: number) => void) { }
var x: Example;
// When written with overloads, OK -- used first overload
// When written with optionals, correctly an error
// fn111(x.diff);