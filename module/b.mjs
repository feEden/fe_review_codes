import * as a from './main.mjs'
// 这样写会报错，[Module] { a1: <uninitialized>, a2: <uninitialized> } main.mjs还没有执行完
/**
 *  如果a1、a2用const/let 定义 Cannot access 'a1' before initialization
 *  如果是var 输出undefined
 */
// import { a1, a2 } from './main.mjs'
/**
 * 在执行代码之前，会经历以下阶段：
 * 1.查找，下载，解析，构建所有模块实例 会生成缓存
 * 2.在内存中腾出空间给即将 export 的内容（此时尚未写入 export value）。
 * 然后使 import 和 export 指向内存中的这些空间，这个过程也叫连接
 * 3.运行模块代码将变量的实际值填写在第二步生成的空间中
 */

// main.mjs没有执行完之前，链接的空间还没有赋值
// [Module] { a1: <uninitialized>, a2: <uninitialized> }
console.log(a);