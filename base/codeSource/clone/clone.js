function Person() {}
const p = new Person();

const obj = {
    a: 1,
    b: '2',
    c: true,
    d: undefined,
    e: null,
    f: Symbol('symbol'),
    h: function () {},
    g: {
        aa: 1,
        bb: 3,
    },
    m: new RegExp('[0-9]'),
    n: [1,2, {
        xx: 1,
    },4],
    // 稀疏数组
    aa: new Array(1),
    // 时间
    date: new Date(),
    // 构造函数
    person: p,
};

// 循环引用
// obj.circle = obj;
// 原型链
Object.setPrototypeOf(obj, {
    dddd: 1,
    ff: 4,
});
// 只读属性
Object.defineProperty(obj, 'unwritable', {
    value: 'unwritable',
    enumerable: true,
    configurable: false,
    writable: true,
});
// 不可扩展
Object.defineProperty(obj, 'configurable', {
    value: 'configurable',
    enumerable: true,
    configurable: true,
    writable: false,
});
// 不可枚举
Object.defineProperty(obj, 'enumerable', {
    value: 'enumerable',
    enumerable: false,
    configurable: false,
    writable: false,
});

// 浅拷贝，能处理函数、null、undefined、Symbol、正则,但对于对象类型还是相同的地址指向
// 数组会处理成对象
// 时间会处理成时间字符串
// 不可枚举属性省略
// 无法处理原型链
// const target = Object.assign({}, obj);
// console.log(target.__proto__, obj.__proto__);
// console.log(target);
// obj.g.aa = 'xxxx';
// xxxx
// console.log(target.g);
// target.g.bb = 'vvvvv';
// vvvvv
// console.log(obj.g);
// undefined undefined
// console.log(target.aa[0], obj.aa[0]);
// 2020-08-17T14:04:31.261Z 2020-08-17T14:04:31.261Z
// console.log(target.date, obj.date);
// [Function: Person] [Function: Person]
// console.log(target.person.constructor, obj.person.constructor);
// console.log(target);
// console.log(target.aa[0], obj.aa[0]);
// console.log(target.m === obj.m);
// console.log(target.h === obj.h);
// console.log(target.f === obj.f);

// 无法拷贝函数、symbol，undefined 字段直接清除
// 正则会被处理成{}
// 时间处理成字符串
// 稀疏数组每个值处理成null
// 不可枚举属性省略
// 无法处理原型链
// 无法处理循环引用 error Converting circular structure to JSON
// const target = JSON.parse(JSON.stringify(obj));
// console.log(target);
// console.log(obj.__proto__, target.__proto__);
// 稀疏数组拷贝后输出null
// target.aa[0] null obj.aa[0] undefined
// console.log(target.aa[0], obj.aa[0]);
// 构造函数指向了Object
// console.log(target.person.constructor, obj.person.constructor);

/**
 * 深度克隆
 * 1. 基本类型： number string boolean undefined null 直接复制
 * 2. 引用类型：
 *      1. Symbol Function Array（需要留意稀疏数组） RegExp Set Map Object Date Buffer 创建新对象
 *      2. 属性修饰符（不可枚举属性省略）
 *      3. 原型链拷贝
 *      4. 循环引用
 * @param {*} source 
 */
const cloneDeep = function(source) {}
// 不可枚举属性省略
for (const key in obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, key)
    if (desc && !desc.enumerable) {
        console.log(desc);
    }
}
// console.log(Object.keys(obj));