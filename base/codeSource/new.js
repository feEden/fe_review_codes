function _new(fn, ...args) {
    const that = Object.create(fn.prototype);
    const result = fn.apply(that, args);

    // 基本类型
    if (Object(result) == result) {
        return result;
    }

    return that;
}