import React, { useState, useRef } from 'react';

import StateCounter from './components/stateCounter';
import EffectCounter from './components/effectConter';
// import AnimateDemo from './components/animateDemo';
import RefInput, { XInput } from './components/refInput';
import ReducerCounter from './components/reducerCounter';

export default function App() {
    const inputRef = useRef<XInput>(null);
    const [initCounter, setInitCounter] = useState(11);

    const onInputFocus = () => {
        const input = inputRef.current;
        if (input) {
            input.focus();
            input.blur();
            input.sayHi();
        }
    }

    return (
        <>
            <button onClick={() => setInitCounter(initCounter + 10)} >APP Button</button>
            <button onClick={onInputFocus} >ref input focus</button>
            <StateCounter />
            <EffectCounter initCounter={initCounter} />
            <br />
            {/* <AnimateDemo /> */}
            <RefInput ref={inputRef} />
            <ReducerCounter />
        </>
    )
}