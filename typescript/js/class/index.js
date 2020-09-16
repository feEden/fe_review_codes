"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 属性默认被public修饰
var Person = /** @class */ (function () {
    // 不能在声明类的外部使用，但可以在它的子类使用
    function Person(theName) {
        this._name = theName;
    }
    Object.defineProperty(Person.prototype, "name", {
        // readonly name: string 把声明和赋值合并
        // constructor(readonly _name: string) {
        // }
        // get不带有 set的存取器自动被推断为 readonly
        get: function () {
            return this._name;
        },
        set: function (newName) {
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
// Employee 能够继承 Person
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.createPersion = function () {
        return new Person('name');
    };
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Howard", "Sales");
// Person { name: 'name' }
console.log(howard.createPersion());
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
// static 修饰静态属性 用类名调用
// 抽象类  abstract 可以存在普通方法
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.prototype.test1 = function () {
        console.log('saaaa');
    };
    return Grid;
}());
console.log(typeof Grid);
// 声明一个类时：同时声明了
// 1. 实例的类型
// 2. 构造函数
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
// typeof Greeter === 'function'
// greeterMaker 是一个构造函数 跟Greeter 等价，上面存在所有的静态方法和constructor
var greeterMaker = Greeter;
console.log(greeterMaker);
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
