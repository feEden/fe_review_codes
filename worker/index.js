// worker 环境
console.log('worker执行开始...');
// document is not defined
// console.log(document);
// window is not defined
// console.log(window);

// this DedicatedWorkerGlobalScope(专用worker全局作用域)
// console.log(this);

// worker 内部发送 主程序监听
postMessage('How do you do?');
// worker 内部监听 主程序发的信息
addEventListener('message', (e) => {
    console.log(e.data);
});

// 同步加载，加载解析完，才会继续向下
/**
 * 主程序执行开始...
    主程序执行结束...
    worker执行开始...
    1 a.js
    b.js
    worker执行结束...
    How do you do?
    subworker执行开始...
    subworker执行开始...
    subworker, are you ok?
    I am fine, and you?
 */

//  safari （13.0.5 ）不支持创建子worker
// 谷歌 （80.0.3987.149）火狐（75.0） OK
// 可以通过创建多个subworker，分担主worker的任务
// const subworker = new Worker('index1.js');

// 信息传递是一一对应的关系，只能是创建worker的页面跟当前worker进行通信
// subworker.postMessage('subworker, are you ok?');

console.log('worker执行结束...');