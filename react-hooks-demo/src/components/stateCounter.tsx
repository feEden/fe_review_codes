import React, { useState } from 'react';

type counterType = {
    a: number,
};

export default function Counter(props: any) {
    // const [counter, setCounter] = useState(0);
    // setCounter 异步更新数据
    const [counter, setCounter] = useState<counterType>({ a: 1 });
    // 第一次counter的初始值变成了3，但是点击按钮后，重新执行函数（重新渲染），值一直是3
    // counter.a = 3;
    // setCounter(counter);

    // 下面方法中，直接改变state的值，不会触发页面重新渲染。可以用作参数查询（缓存上一次的查询条件）
    // function updateCounter() {
    //     counter.a = 55;
    // }

    return (
        <>
            <div>test useState=======</div>
            <div>counter: { counter.a }</div>
            <button onClick={() => setCounter({ a: ++counter.a })}>Click Me</button>
            {/* 下面页面不更更新 */}
            {/* <button onClick={() => ++counter.a }>Click Me</button> */}
            {/* <button onClick={() => updateCounter()}>Click Me</button> */}
        </>
    )
}