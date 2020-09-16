"use strict";
var Feman = /** @class */ (function () {
    function Feman(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Feman.prototype.print = function () {
        console.log(this.name, this.age, this.sex);
    };
    return Feman;
}());
