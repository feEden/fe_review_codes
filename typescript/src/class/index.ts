// 属性默认被public修饰
class Person {
    protected _name: string;
    // 不能在声明类的外部使用，但可以在它的子类使用
    protected constructor(theName: string) { this._name = theName; }
    // readonly name: string 把声明和赋值合并
    // constructor(readonly _name: string) {
    // }


    // get不带有 set的存取器自动被推断为 readonly
    get name(): string {
        return this._name;
    }

    set name(newName: string) {
    }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public createPersion() {
        return new Person('name');
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
// Person { name: 'name' }
console.log(howard.createPersion());
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.

// static 修饰静态属性 用类名调用

// 抽象类  abstract 可以存在普通方法
abstract class Grid {
    // 在子类中必须被重写
    abstract test(): void;
    test1() {
        console.log('saaaa');
    }
}

console.log(typeof Grid);

// 声明一个类时：同时声明了
// 1. 实例的类型
// 2. 构造函数

class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string | undefined;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

// typeof Greeter === 'function'
// greeterMaker 是一个构造函数 跟Greeter 等价，上面存在所有的静态方法和constructor
let greeterMaker: typeof Greeter = Greeter;
console.log(greeterMaker)
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());