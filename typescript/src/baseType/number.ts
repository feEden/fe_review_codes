// ts里的所有数字都是浮点数（小数计算时会出现精度丢失），除了支持十进制和十六进制字面量，
// ypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral);
