"use strict";
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// 类型断言（类型转换，只作用在编译期）
// 进行转换的类型需要时未知的
// 使用jsx时，只有as是允许断言的
var some = '1';
var value = some;
var valueq = some;
