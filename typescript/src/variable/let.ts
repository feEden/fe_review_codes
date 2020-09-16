// let声明的变量，在声明前不能用，在声明后，如果没有赋值，也不能用
// name123++;
let name123: number;
// name123++;

function foo() {
    // okay to capture 'a'
    return aaaa;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
console.log(foo());

let aaaa: number;

// 解构：类型 = 默认值
function f({ a, b = 0 }: { a: string, b?: number } = { a: "" }): void {
    // ...
}