import './apply.js';

/**
 * 防抖
 * 指定时间内触发多次，只执行最后一次（函数的执行时间>=delay）
 */

export const debounce = (fn, delay = 200) => {
    let timeOut;

    return (...arg) => {
        if (timeOut) {
            clearTimeout(timeOut);
        }

        timeOut = setTimeout(() => {
            fn.myApply(this, arg);
            timeOut = null;
        }, delay);
    }
 }