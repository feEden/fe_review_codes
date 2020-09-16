// a.js
exports.a1 = true;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.a2 = true;
exports = {
    test: 1,
};
console.log(exports);