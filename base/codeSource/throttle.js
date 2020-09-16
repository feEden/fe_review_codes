import './apply.js';

/**
 * 节流
 * 每delay时间执行一次函数
 */

export const throttle = (fn, delay = 200) => {
    let timeOut;

    return (...arg) => {
        if (!timeOut) {
            timeOut = setTimeout(() => {
                fn.myApply(this, arg);
                timeOut = null;
            }, delay);
        }
    }
}
