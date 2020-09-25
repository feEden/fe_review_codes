/**
 * 冒泡排序 （从大到小）
 * 相邻的两个数比较，数字大的往后放
 * 交换完一次，数组最后面的一个数字就是最大的，交换完两次，数组最后面的两个数字是有序的，
 * 所以可以优化，第二次循环次数为len - i - 1
 * 在最坏的情况下，两层循环 时间复杂的 O(n2)
 * 在最理想的情况下（数组本身有序），一层循环就够了，时间复杂的 O(n)
 * @param {*} target 
 */
function bubblingSort(target) {
    const attr = target.slice();
    const len = attr.length;

    // 控制比较次数
    for (let i =0; i < len; i++) {
        // 一次循环结束，flag = false 表示数组有序
        let flag = false;

        // 做交换 后面的都是有序的，可以不进行排序
        for (let j = 0; j < len - i - 1; j++) {
            if (attr[j] > attr[j+1]) {
                [attr[j+1], attr[j]] = [attr[j], attr[j+1]];

                flag = true;
            }
        }

        if (!flag) return attr;
    }

    return attr;
}

const attr = [5, 3, 2, 4, 1];
// [3,5,2,4,1]

console.log(bubblingSort(attr));