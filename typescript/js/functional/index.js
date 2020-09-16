"use strict";
// 知识点：
//    函数类型，可选参数，默认值，剩余参数，this指向，函数重载
//  类型推断 在赋值语句的一边指定了类型，ts会自动识别类型（类型推论）
// myAdd has the full function type
var myAdd = function (x, y) { return x + y; };
// myAdd('2', 1);
// The parameters `x` and `y` have the type number
var myAdd1 = function (x, y) { return x + y; };
// myAdd1(1, '3');
// 可选参数，默认值(ts会根据赋值的默认值推断变量类型)
// 可选参数和带默认值的参数 参数l函数类型相同
// 如果带默认值的参数在必选参数前面，调用的时候，可以穿入undefined占位使用默认值
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 1; }
    return firstName + " " + lastName;
}
var result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
var result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob",   '1');         // ah, just right
// this
// 防治this被更改，箭头函数， 传this参数
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
// 函数重载
// 把最精确的定义放在最前面, 编译器从上往下找最合适的
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
