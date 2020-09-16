// function _setTimeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
// }
// async function asyncTest() {
//     let res = await _setTimeout(3000);
//     console.log(res);
//     res = await _setTimeout(1000);
//     console.log(res);
//     res = await _setTimeout(2000);
//     console.log(res);
// }

// // 1000 3000 4000
// // asyncTest().then(() => {
// //     console.log('all load success...');
// // });

// function *genneratorTest() {
//     // res 被赋值 是在下一次调用next传入的参数
//     let res = yield _setTimeout(3000);
//     console.log(res);
//     res = yield _setTimeout(1000);
//     console.log(res);
//     res = yield _setTimeout(2000);
//     console.log(res);
// }

// // const it = genneratorTest();
// // { value: xxx, done: false }
// // 手动执行
// // it.next().value.then((res) => {
// //     it.next(res).value.then((res) => {
// //         it.next(res).value.then((res) => {
// //             const data = it.next(res);
// //             console.log(data);
// //         });
// //     });
// // });

// // 自动执行 串行执行异步函数
// function genneratorAuto(generator) {
//     return new Promise((resolve, reject) => {
//         const it = generator();
//         function step(args) {
//             try {
//                 const { value, done } = it.next(args);
//                 if (done) {
//                     resolve();
//                 } else {
//                     return Promise.resolve(value).then(val => step(val), e => reject(e));
//                 }
//             } catch(e) {
//                 reject(e);
//             }
//         }
//         step();
//     });
// }
// genneratorAuto(genneratorTest);

const p = Promise.resolve();

(async () => {
  await p; console.log('after:await');
})();

p.then(() => console.log('tick:a'))
 .then(() => console.log('tick:b'));