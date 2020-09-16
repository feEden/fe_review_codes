// 使用循环实现深克隆
// 递归实现容易爆栈(破解：改成循环（使用栈，一层一层检测）、循环检测（克隆时，判断属性值和source是否相等）)
// 只考虑对象、数组、基本类型
// 缓存了拷贝过的对象，遇到了相同的对象，直接从缓存中读取拷贝后的对象
// 解决了循环引用、原对象属性指向同一个对象克隆后指向不同对象的问题
// https://juejin.im/post/6844903692756336653

const isType = (type) => {
    return (data)  => Object.prototype.toString.call(data) === `[object ${type}]`
};
const isObject = isType('Object');
const isArray = isType('Array');
const isNull = isType('Null');
const isUndefined = isType('Undefined');

const cloneWhile = function (source) {
    if (typeof source !== 'object') return source;
    const target = isObject(source) ? {} : [];

    // 将拷贝过的对象存储，下次遇到相同的对象直接用
    // 使用WeakMap，弱引用，不需要管理垃圾回收
    const weekMap = new WeakMap();

    // 存放需要克隆的对象 tempStack为空，克隆结束
    // root 每次拷贝后的对象
    // key  当前正则遍历的可以
    // data 需要克隆的数据
    const tempStack = [
        {
            root: target,
            key: undefined,
            data: source,
        }
    ];

    while (tempStack.length) {
        let { root, data, key } = tempStack.pop();

        const clonedObj = weekMap.get(data);
        // 该对象克隆过
        if (clonedObj) {
            root[key] = clonedObj;
            // 退出本次循环
            continue;
        }

        // res指向root, 跟上一层建立链接
        let res = root;
        if (!isUndefined(key)) {
            res = root[key] = isObject(data) ?  {} : [];
        }

        // 缓存克隆的对象
        weekMap.set(data, res);

        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const item = data[key];
            
            if (isObject(item) || isArray(item)) {
                // 新的要拷贝的对象进栈
                tempStack.push({
                    root: res,
                    key,
                    data: item,
                });
            } else {
                res[key] = item;
            }
          }
        }
    }


    return target;
}

var a = {
    b1: 1,
    b2: {
        c1: 1
    }
};
var test = {
    a1: 1,
    a2: a,
    a3: [1,2,3],
    a4: a,
    a6: new Array(1),
}

// 循环引用
// test.a5 = test;

const target = cloneWhile(test);
console.log(target);
// console.log(target === test);
// console.log(target.a2 === test.a2);
// console.log(target.a3 === test.a3);
// console.log(target.a3[2] === test.a3[2]);
// a2 a4 指向的是同一个地址，但是深克隆之后，失去了引用关系
console.log(target.a2 === target.a4);
console.log(target.a3 === test.a3);

// const a = {};
// const test = {
//     a,
//     b: a,
// }

// const target = cloneWhile(test);

// console.log(target.a === target.b);

console.log(target.a6[0]);