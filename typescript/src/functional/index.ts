// 知识点：
//    函数类型，可选参数，默认值，剩余参数，this指向，函数重载


//  类型推断 在赋值语句的一边指定了类型，ts会自动识别类型（类型推论）
// myAdd has the full function type
let myAdd = function(x: number, y: number): number { return x + y; };
// myAdd('2', 1);

// The parameters `x` and `y` have the type number
let myAdd1: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };
// myAdd1(1, '3');

// 可选参数，默认值(ts会根据赋值的默认值推断变量类型)
// 可选参数和带默认值的参数 参数l函数类型相同
// 如果带默认值的参数在必选参数前面，调用的时候，可以穿入undefined占位使用默认值
function buildName(firstName: string, lastName = 1) {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob",   '1');         // ah, just right

// this
// 防治this被更改，箭头函数， 传this参数
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);


// 函数重载
// 把最精确的定义放在最前面, 编译器从上往下找最合适的
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: Array<{suit: string; card: number; }>): number;
function pickCard(x: number): {suit: string; card: number; };

function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
