"use strict";
// let声明的变量，在声明前不能用，在声明后，如果没有赋值，也不能用
// name123++;
var name123;
// name123++;
function foo() {
    // okay to capture 'a'
    return aaaa;
}
// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
console.log(foo());
var aaaa;
// 解构：类型 = 默认值
function f(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
