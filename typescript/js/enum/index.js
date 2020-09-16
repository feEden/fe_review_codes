"use strict";
// "use strict";
// var E;
// (function (E) {
//     E[E["Foo"] = 0] = "Foo";
//     E[E["Bar"] = 1] = "Bar";
//     E[E["Tool"] = 2] = "Tool";
// })(E || (E = {}));
// 数字枚举
var E;
(function (E) {
    E[E["Foo"] = 0] = "Foo";
    E[E["Bar"] = 1] = "Bar";
    E[E["Tool"] = 2] = "Tool";
})(E || (E = {}));
// { '0': 'Foo', '1': 'Bar', '2': 'Tool', Foo: 0, Bar: 1, Tool: 2 }
console.log(E[0], E.Foo);
function getSomeValue() {
    return 1;
}
// 不带初始化的枚举成员， 要么放在首位，要么放在常量枚举成员后面
// enum A {
//     // 在编译时无法确定初始值
//     A = getSomeValue(),
//     B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }
function getStr() {
    return '1';
}
// 字符串枚举
// 字符串枚举每个成员必须用字符串字面量或另一个字符串枚举成员进行初始化
// 不能使用计算值初始化
var Direction;
(function (Direction) {
    // Up = getStr(),
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// 异构枚举
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
console.log(1 /* Down */);
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
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
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
