import React, { useState, useEffect } from 'react';

/**
 *  Hook规则(eslint-plugin-react-hooks)
 *     Hook本质就是函数，需要遵守一下规则
 *          1. 在最顶层使用HOOK，保证每次渲染都按相同的顺序调用HOOK，保证HOOK的状态正确
 *         2. 只在React函数中调用Hook
 */
export default (props) =>  {
    /**
     *  count 定义的state
     *  setCount 修改count的函数
     */
    const [count, setCount] = useState(0);
    // 副作用，可以多次使用，将同一业务放在第一个地方集中处理，每一个effect只做一件事
    // componentDidMount，componentDidUpdate 和 componentWillUnmount的组合
    /**
     *  挂载、卸载、更新，都会走这个hooks
     * 每次渲染都会执行，且Dom都已经更新完毕
     *  多个effect, 在调用一个新的effect之前会对前一个effect进行清理
     * userEffect(() => {}, []) 接受两个参数，第一个参数是一个函数，实现了componentDidMount，componentDidUpdate的功能
     * 第一个参数是一个数组，每一项都都代表了第一个参数用到的state变量，如果其中的某一个发生了变化，第一个参数（函数）将会被执行（也就是触发了componentDidUpdate生命周期）
     *  如果第二个参数是一个空数组，表示effect不受state的变化而被执行，所以这个effect只会执行两次（componentDidMount、componentWillUnmount）
     */
    useEffect(() => {
        document.title = `You clicked ${count} times`;

        return () => {
            // 相当于componentWillUnmount，执行一些收尾操作，防止内存泄漏
            document.title = `You clicked 0 times`;
        }
    }, [count]);// 只有在count发生变化时，才更新document.title，如果没有这个才是，document.title每次渲染都会更新
    return (
        <button onClick={ () => setCount(count + 1) }>click me { count }</button>
    )
}
// export default class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             sum: 10,
//         };
//     }
//     setCount() {
//         this.setState((state) => ({
//             count: state.count + 1,
//         }));
//     }
//     render() {
//         return (
//             <>
//                 <button onClick={() => this.setCount()}>click me { this.state.count } { this.state.sum }</button>
//             </>
//         );
//     }
// }