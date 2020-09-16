// 泛型，表示任意类型, 无法创建泛型枚举和泛型命名空间
// 泛型指的是实例部分的类型， 类的静态属性不能使用泛型类

function test<T> (name: T): T {
    console.log(name.toString());
    // console.log(name.length);
    return name;
}

// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

class GenericNumber<T> {
    // static age: T;
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 泛型约束
interface Lengthwise {
    length: number;
}

// 泛型T继承了Lengthwise， 说明，传入的参数必须包含length属性
function test1<T extends Lengthwise> (name: T): T {
    console.log(name.toString());
    console.log(name.length);
    return name;
}

test1({length: 1, b: 2});

// 在泛型约束中使用类型参数
// function getProperty<T, K>(obj: T, key: K) {
//     return obj[key];
// }

let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty<object, string>(x, "a"); // okay
// getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.