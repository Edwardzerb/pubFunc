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
}

