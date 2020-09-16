// 表示非原始类型
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// 类型断言（类型转换，只作用在编译期）
// 进行转换的类型需要时未知的
// 使用jsx时，只有as是允许断言的
let some: any = '1';
let value: number = <number>some;
let valueq: number = some as number;