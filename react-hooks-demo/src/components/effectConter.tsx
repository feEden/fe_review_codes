import React, { useState, useEffect } from 'react';

type EffectCounterPropsType = {
    initCounter: number,
}

export default function EffectCounter ({ initCounter = 0 }: EffectCounterPropsType) {
    const [counter, setCounter] = useState(0);

    /**
     * useEffect 接收两个参数, 一个函数中可以有多个useEffect
     *  1. 回调，处理副作用（可以理解成跟做跟渲染无关的事）, 执行时机，
     *      1. 在组件渲染完成后，在下例中，组件渲染完成后，执行回调，setCounter(initCounter) 异步更新counter导致组件重新渲染，
     *          如果没有这只依赖项，在第二次渲染完成后，又会执行回调，导致循环更新了。
     *  2. 副作用的依赖项，可以不写， 但是如果依赖项中改变了当前组件的状态值，会导致组件一直渲染，可以传入[]表示副作用不依赖任何状态
     * 
     *  useEffect的回调可以返回一个函数，用来处理一些副作用的清理作用，返回的函数的执行时机：
     *  1. 下次重新渲染后, 下次effect回调执行之前（counter导致的重新渲染没有执行， 会在组件销毁之前执行）
     *  2. 组件销毁（相当于生命周期的componentWillUnmount）  
     */
    useEffect(() => {
        console.log('render...');
        setCounter(initCounter);

        return () => {
            console.log('effect return...', initCounter);
        }
    }, [initCounter]);

    return (
        <>
            <div>test useEffect============</div>
            <div>counter: { counter }</div>
            <button onClick={() => setCounter(counter+1)}>Click Me</button>
        </>
    )
}