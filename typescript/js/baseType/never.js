"use strict";
// 表示用不存在的值的类型
// throw err 死循环
function error(message) {
    throw new Error(message);
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// let ll: never = 1;
// 是任何类型的子类型， 可以赋值给任意类型
var ll = error('1');
// 没有任意类型可以赋值给never类型，除了自身
var lll = error('2');
