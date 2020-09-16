// "use strict";
// var E;
// (function (E) {
//     E[E["Foo"] = 0] = "Foo";
//     E[E["Bar"] = 1] = "Bar";
//     E[E["Tool"] = 2] = "Tool";
// })(E || (E = {}));

// 数字枚举
enum E {
    Foo,
    Bar,
    Tool,
}
// { '0': 'Foo', '1': 'Bar', '2': 'Tool', Foo: 0, Bar: 1, Tool: 2 }
console.log(E[0], E.Foo);

function getSomeValue(): number {
    return 1;
}
// 不带初始化的枚举成员， 要么放在首位，要么放在常量枚举成员后面
// enum A {
//     // 在编译时无法确定初始值
//     A = getSomeValue(),
//     B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }

function getStr(): string {
    return '1';
}
// 字符串枚举
// 字符串枚举每个成员必须用字符串字面量或另一个字符串枚举成员进行初始化
// 不能使用计算值初始化
enum Direction {
    // Up = getStr(),
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// 异构枚举
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

// let c: Circle = {
//     // kind: ShapeKind.Square,
//     //    ~~~~~~~~~~~~~~~~ Error!
//     radius: 100,
// }

// 常量枚举，不能包含计算属性
// 只能通过跳用属性使用
//编译期间会被删除
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

console.log(Directions.Down)

// 外部枚举
declare enum Enum {
    A = 1,
    B,
    C = 2
}

// noFound ??
// console.log(Enum)

type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here