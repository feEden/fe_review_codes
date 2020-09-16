import React, { useReducer } from 'react';

const reduer = (state: number, action: string) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return 0;
    }
}

// useReducer 用来解决复杂的state
/**
 * 当涉及多个子值的复杂状态逻辑时，useReducer通常比useState更好。
 * 它优化了触发深度更新的组件的性能，因为传递的是disapth而不是callback。
 */
const ReducerCounter = () => {
    const [counter, dispatch] = useReducer(reduer, 0);

    return (
        <>
            <div>{ counter }</div>
            <button onClick={() => dispatch('increment')}>加1</button>
            <button onClick={() => dispatch('decrement')}>减1</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </>
    )
}

export default ReducerCounter;