"use strict";
// any 对未知类型的定义
var a = 1;
a = '2';
a = false;
a = {};
// 与Object的区别
// Object定义的变量也可以接受任意类型赋值 但是不能用它来调用Object原型链上不存在的方法
var aa = 2;
// 有的方法
console.log(a.toString());
console.log(aa.hasOwnProperty('a'));
// 没有的方法
console.log(a.ifItExists()); // 编译报错
// console.log(aa.ifItExists());
