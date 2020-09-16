import {foo} from './a2.mjs';
console.log('b.mjs');
// Cannot access 'foo' before initialization
console.log(foo);
export let bar = 'bar';