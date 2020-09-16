import React, { useState, forwardRef, ChangeEvent, useImperativeHandle, useRef, Ref  } from 'react';

export type XInput = {
    focus: () => any;
    blur: () => any;
    sayHi: () => any;
};

// 函数组件不能传递ref typeError Cannot add property current, object is not extensible
// 使用forwardRef包裹
function RefInput(props: any, ref: Ref<XInput>) {
    const [value, setValue] = useState('');
    /**
     * useRef 访问DOM节点或者React元素、保持变量引用
     * 返回的 ref 对象在组件的整个生命周期内保持不变（每次渲染时返回同一个 ref 对象，变的是current属性， 不会导致页面重新渲染）。
     */
    const inputRef = useRef<HTMLInputElement>(null);

    // useImperativeHandle 扩展、重写ref上的属性 
    useImperativeHandle(ref, () => ({
        focus: () => {
            console.log('=======focus');
            inputRef.current && inputRef.current.focus()
        },
        blur: () => {
            console.log('=======blur');
            inputRef.current && inputRef.current.blur()
        },
        sayHi: () => {
            console.log('hello, world!');
        }
    }));

    // const onInputFocus = () => {
    //     // inputRef.current 获取inputRef的初始值
    //     const input = inputRef.current;
    //     if (input) {
    //         // input能聚集，如果input当作组件用呢
    //         input.focus();
    //     }
    // }

    return (
        <>
            <div>test useState=======</div>
            <input type="text" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} ref={inputRef} />
            {/* <button onClick={onInputFocus}>input focus</button> */}
        </>
    )
}

export default forwardRef(RefInput)