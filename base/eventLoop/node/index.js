/**
 * 
 *  timers 阶段: 这个阶段执行setTimeout(callback) and setInterval(callback)预定的callback;
    I/O callbacks 阶段: 执行除了 close事件的callbacks、被timers(定时器，setTimeout、setInterval等)设定的callbacks、setImmediate()设定的callbacks之外的callbacks;
    idle, prepare 阶段: 仅node内部使用;
    poll 阶段: 获取新的I/O事件, 适当的条件下node将阻塞在这里;
    check 阶段: 执行setImmediate() 设定的callbacks;
    close callbacks 阶段: 比如socket.on(‘close’, callback)的callback会在这个阶段执行.

    process.nextTick、微任务执行时机
        1. 宏任务执行完，立即执行
        2. 每个阶段都有任务队列，进入下一个阶段之前，会执行完任务队列或达到系统上限
        （如果有process.nextTick，先执行（如果process.nextTick递归调用，会一直执行））

    setImmediate 执行时机，在check阶段执行
        在poll阶段，
            1. 如果没有setImmediate回调，将阻塞在该阶段等待setImmediate的回调
            （此时会有一个检查机制，查看是和否超时的timer,有的话，直接进入下一次循环，即重新进入timers阶段）
            2. 如果有，将进入check阶段，执行setImmediate的回调
 */

// setTimeout(()=>{
//     console.log('timer1')

//     process.nextTick(() => {
//         console.log('nextTick1');
//     });

//     Promise.resolve().then(function() {
//         console.log('promise1')
//     })

//     process.nextTick(() => {
//         console.log('nextTick2');
//     });
// }, 0)

// setTimeout(()=>{
//     console.log('timer2')

//     process.nextTick(() => {
//         console.log('nextTick3');
//     });
//     Promise.resolve().then(function() {
//         console.log('promise2')
//     })
//     process.nextTick(() => {
//         console.log('nextTick4');
//     });
// }, 0)

// const fs = require('fs')
// const starttime = Date.now()
// let endtime

// fs.readFile('text.txt', () => {
//   endtime = Date.now()
//   console.log('finish reading time: ', endtime - starttime)
// })

// let index = 0

// function handler () {
//   if (index++ >= 1000) return
// //   console.log(`nextTick ${index}`)
// //   process.nextTick(handler)
//   console.log(`setImmediate ${index}`)
//   setImmediate(handler)
// }

// handler()


// setTimeout(() => {
//     console.log('setTimeout');
// }, 0);

// setImmediate(() => {
//     console.log('setImmediate');
// }, 0);

// let bar;

// setTimeout(() => {
//   console.log('setTimeout');
// })

// setImmediate(() => {
//   console.log('setImmediate');
// })
// function someAsyncApiCall(callback) {
//   process.nextTick(callback);
// }

// someAsyncApiCall(() => {
//   console.log('bar', bar); // 1
// });

// bar = 1;

const fs = require('fs');

console.log('start');

setTimeout(() => {
    console.log('setTimeout');  

    Promise.resolve().then(() => console.log('setTimeout resolve。。。'));

    process.nextTick(() => {
        console.log('setTimeout nextTick');
    });
}, 0);

setTimeout(() => {
    console.log('setTimeout1');  
});

process.nextTick(() => {
    console.log('nextTick');
});

Promise.resolve().then(() => console.log('resolve'));

fs.readFile('text.txt', () => {
    console.log('readFile')
    setTimeout(() => {
        console.log('setTimeout inner');  
    }, 0);

    setImmediate(() => {
        console.log('setImmediate');  
    }, 0);
})

console.log('end');