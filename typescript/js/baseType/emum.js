"use strict";
// 枚举为一组数值赋予友好的名字 数值默认从0开始，可以手动设置
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// 0
var color = Color.Red;
// 
var color1 = Color[1];
// Green
console.log(color, color1);
