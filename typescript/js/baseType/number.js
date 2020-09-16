"use strict";
// ts里的所有数字都是浮点数（小数计算时会出现精度丢失），除了支持十进制和十六进制字面量，
// ypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral);
