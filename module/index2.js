let index = {
    a: 1,
};

function add() {
    index.a++;
};

// module.exports = {
//     add,
//     index,
// }

// exports是module.exports 的一种简写，最终数据还是通过module.exports暴漏，只有当module.exports没有属性时，exports才会生效
// exports 和module.exports 只想同一个地址
// 下面这种写法无效
// exports = {
//     a: 1,
// };
// 对
exports.a = 1;


console.log(module);
// console.log(this);
// console.log(global);
// console.log(self);