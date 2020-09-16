/**
 * 指定执行函数的this, 可以携带参数
 * @param {*} thisArg   指定执行函数的this
 * @param  {...any} arg 执行函数的参数
 */
Function.prototype.myCall = function (thisArg, ...arg) {
    // 必须使用函数调用
    if (typeof this !== 'function') {
        throw new Error('please use function call...');
    }

    // thisArg 可以是常量 null undefined
    const that = thisArg ? Object(thisArg) : window;

    // 将函数挂载到that中
    that.fn = this;
    // 返回函数调用结果
    const result = that.fn(...arg)  || undefined;

    Reflect.deleteProperty(that, 'fn');

    return result;
}

// test 
// function test(a, b, c) {
//     console.log(this);
//     console.log([].slice.myCall(arguments));

//     return a + b + c;
// }

// const test1 = () => {
//     console.log(this);
// }

// const obj = {
//     xxx: 1,
// };
// test.myCall(obj, 1,2,3);
// // 箭头函数执行this不生效
// test1.myCall(obj);