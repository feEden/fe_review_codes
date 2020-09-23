/**
 * function.bind(thisArg, ...args)
 * 返回一个原函数的拷贝，并且指定了this和初始参数
 * 
 * 1. 如果thisArg是原始类型，会包装成对应的object 1 ==> Number(1) 
 * 2. 如果最终使用new执行了绑定函数，this指定失效
 * 3. 如果thisArg指定了null\undefined, 绑定函数的this将被指定为运行时所在作用域的this
 */

/**
 * @param {*} thisArg 绑定函数的this 
 * @param  {...any} args 预设参数
 */
Function.prototype.myBind = function (thisArg, ...args) {
    const bindFn = this;

    if (typeof bindFn !== 'function' ) {
        throw new Error('please use function call...');
    }

    const boundFn = function (...restArgs) {
        // 使用new调用
        // if (new.target) {
        //     let result = bindFn.apply(this, [...args, ...restArgs]);
            
        //     if (typeof result !== 'object' && typeof result !== 'function') {
        //         result = this;
        //     }

        //     return result;
        // }
        // 补充 作为构造函数被调用（new）
        if (this instanceof boundFn) {
            let result = bindFn.apply(this, [...args, ...restArgs]);
            
            // if (typeof result !== 'object' && typeof result !== 'function') {
            //     result = this;
            // }

            // result是对象
            if (Object(result) === result) {
                result = this;
            }

            return result;
        }

        return bindFn.apply(thisArg, [...args, ...restArgs]);
    }

    // 补充 将boundFn的原型指向bindFn的原型
    // boundFn.prototype = Object.create(bindFn.prototype, {
    //     constructor: {
    //         value: boundFn,
    //         configurable: true,
    //         enumerable: false,
    //         writable: true,
    //     },
    // });
    if (bindFn.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = bindFn.prototype;
        boundFn.prototype = new Empty();
        Empty.prototype = null;
    }


    return boundFn;
}

function rest(a, b, c) {
    return a + b + c;
}

new (rest.myBind(null, 1))(2,3);