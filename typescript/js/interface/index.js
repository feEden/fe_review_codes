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
function test(obj) { }
var obj = { label: 1, value: 2, };
test(obj);
test({ label: 1 });
// { label: 1, value: 2 } 对象字面量赋值给变量或则当参数传递时，会做 额外的属性检查 ，不同将会报错
// test({ label: 1, value: 2 });
// let aaa1: prop = { label: 1, value: 2, };
//  可以用类型断言绕开检查
var aaa = { label: 1, value: 2, };
// 将对象字面量赋值给一个变量
var obj1 = { label: 1, value: 2, };
aaa = obj1;
// 在定义类型时通过字符串索引签名 [proName: string]: any, 表示除label属性外，可以存在任意类型的属性
aaa = {
    label: 1,
};
// 只读数组
var arr1 = [1, 2, 3, 4, 5];
// arr1[0] = 1;
var c1 = {
    radius: 12,
    PI: 3.14,
    area: 1,
};
c1.radius = 1;
// 声明的函数可以不需要指定类型，会根据type推断
var fn = function (f, l) {
    if (f === 'f')
        return false;
    else
        return true;
};
console.log(fn('1', '1'));
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var object = {
    aa: 1,
    cc: 2,
    // dd: '2',
    name: 1,
    length: 4,
};
console.log(object.name);
console.log(object.length);
var Student = /** @class */ (function () {
    function Student(ID, name, age) {
        this.ID = ID;
        this.name = name;
        this.age = age;
    }
    Student.prototype.getStudentName = function () {
        return this.name;
    };
    ;
    return Student;
}());
var student = new Student(1, 'bob', 15);
console.log(student.getStudentName());
// ClockConstructor 约束的是构造器的参数和返回值
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = "blue";
square.sideLength = 10;
// 接口继承类
// 能继承类的private和protected属性，private属性只能被自身访问，protected属性只能被子类和自身访问
// 这也就意味着，实现这个接口的类必须是接口继承类的子类或自身
