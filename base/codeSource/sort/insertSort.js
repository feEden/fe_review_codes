/**
 * 插入排序
 * 假定当前元素的前面所有数据是有序的，用当前元素跟前面的数据进行比较，将比当前元素大的数据往后移动，直到找到比当前值小的位置，插入
 * 实现：
 *  维护一个有序队列，遍历数组，将元素插入有序队列合适的位置
 * @param {*} target
 */
function insertSort(target) {
  // 取数组的第一，作为有序数组的第一个
  const sortedArr = [target[0]];
  const len = target.length;

  // 从第二个元素开始比较 4
  for (let i = 1; i < len; i++) {
    const item = target[i];
    const sortedArrLen = sortedArr.length;

    // [2, 3, 5]
    for (let j = 0; j < sortedArrLen; j++) {
      const sorted = sortedArr[j];
      if (sorted > item) {
        // 找到合适的位置后，结束循环
        sortedArr.splice(j, 0, item);
        break;
      }
    }
  }

  return sortedArr;
}

function insertSort1(target) {
  const len = target.length;
  // 假定一个最小值
  let temp;
  // 假定第一个元素是有序的，所有从第二个元素开始跟前面所有元素比较，找到最合适的位置（也就是比temp小的位置）
  for (let i = 1; i < len; i++) {
    // 插入temp的索引
    let j = i;
    temp = target[j];

    // [5, 3, 2, 4, 1]
    // [3, 5, 2, 4, 1]
    // [2, 3, 5, 4, 1]
    // 如果前一个元素比temp大，将前一个元素往后移动一位
    while (j > 0 && target[j - 1] > temp) {
      // [5, 5, 2, 4, 1]
      // [3, 5, 5, 4, 1] [3, 3, 5, 4, 1]
      // [2, 3, 5, 5, 1]
      target[j] = target[j - 1];
      j--;
    }

    // 把temp插入到最前面
    // [3, 5, 2, 4, 1]
    // [2, 3, 5, 4, 1]
    // [2, 3, 4, 5, 1]
    target[j] = temp;
  }

  return target;
}

const attr = [5, 3, 2, 4, 1];
console.log(insertSort1(attr));
