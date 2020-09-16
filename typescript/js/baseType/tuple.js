"use strict";
// 元组类型
// 表示一个已知元素数量和类型的数组
var arr;
arr = ['1', 2];
// 越界访问，会报错  Type '"1"' is not assignable to type 'undefined'
// arr[5] = '1';
// arr[3] = false;
console.log(arr);
