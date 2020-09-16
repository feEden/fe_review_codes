/**
 * A instanceof B 表示是否能通过A对象的原型链找到B的原型对象
 * 也就是B是否在A的原型对象上
 * A 对象
 * B 构造函数 
 */

 // 实现
 function instance_of(A, B) {
    if (typeof A !== 'object' && typeof A !== 'function' || A === null) {
        return false;
    }

    let proto = A.__proto__;

    while(true) {
        if (proto === B.prototype) {
            return true;
        }

        proto = proto.__proto__;
        
    }
}

instance_of('', String); // false

// new String('aa').__proto__ === String.prototype
instance_of(new String('aa'), String);

// String.__proto__ === Function.prototype
instance_of(String, Function);

// true Function.__proto__ === Function.prototype
instance_of(Function, Function);

// true Function.__proto__ === Function.prototype
// Function.prototype.__proto__ === Object.prototype
instance_of(Function, Object);

// true  Object.__proto__ === Function.prototype
// Function.prototype.__proto__ === Object.prototype
instance_of(Object, Object); 

 // true  Object.__proto__ === Function.prototype
instance_of(Object, Function);