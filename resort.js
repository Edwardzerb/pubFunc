class resortClass {
  constructor() {
    // this.arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
  }

  // 冒泡排序
  bubbleSort(arr) {
    for(let i = 0; i < arr.length; i ++) {
      for(let j = i; j < arr.length; j ++) {
          if (arr[j] > arr[i]) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
          }
      }
    }
  }

  // 选择排序
  selectSort(arr) {
    for(let i = 0; i < arr.length - 1; i ++) {
      let minIndex = i;
      for(let j = i; j < arr.length; j ++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }

  // 插入排序
  insertSort(arr) {
    var preIndex, current;
    // 快排 需要取出第一个数字去跟后面的比较，所以i = 1
    for(let i = 1; i < arr.length; i++) {
      // 记录前一个坐标
      preIndex = i - 1;
      // 记录当前的值
      current = arr[i];
      // 如果前一个值大于当前的值
      while(preIndex >= 0 && arr[preIndex] > current) {
        // 把前面的值和后面的值互相换一下位置
        arr[preIndex + 1] = arr[preIndex];
        // 一直循环
        preIndex --;
      }
      // 最后不符合上面那个条件的时候，就把current给它
      arr[preIndex + 1] = current;
    }
    return arr;
  }

  qucikSort(arr) {
    if (arr.length <= 1 || !Array.isArray(arr)) {
      return arr;
    }
    // 对数组取半操作
    let pivotIndex = Math.floor(arr.length / 2);
    // 把中间数从原数组中剔除出来
    let pivot = arr.splice(pivotIndex, 1)[0];
    let leftArr = [],
      rightArr = [];
    for(let i = 0; i < arr.length; i++) {
      // 比较取出来的这个值的大小，比中间值小的往左装，大的往右装
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
    
    // 一直递归直到最后完成
    // concat是因为需要把中间值给粘回去
    return this.quickSort(leftArr).concat([pivot], this.quickSort(rightArr));
}




