class dataStr {
  constructor () {
    this.items = [];
  }
}

class Stack extends dataStr {
  constructor() {
    super();
  }
  push(element) { // 添加一个（或几个）新元素到栈顶
    this.items.push(element);
  };
  pop() { // 移除栈顶的元素，同时返回被移除的元素
    return this.items.pop();
  };
  peek() {  // 返回栈顶的元素，但是不对数组进行任何操作
    return this.items[this.items.length - 1];
  };
  isEmpty() { // 如果站内没有任何元素就返回true，否则返回false
    return this.items.length == 0;
  };
  size() {  // 返回栈里的元素个数
    return this.items.length;
  };
  clear() { // 移除栈里的所有元素
    this.items = [];
  };
  print() { // 打印
    console.log(this.toString());
  };
  toString(item) {
    console.log(this);
    return item.toString();
  };

  // 案例  传入一个10进制的数字，自动转换成二进制
  divideBy2(decNumber) {
    let hStack = new Stack();
    let rem = 0;
    let binaryString = '';

    while(decNumber > 0) {
      rem = decNumber % 2;
      hStack.items.push(rem);
      decNumber = Math.floor(decNumber / 2);
      console.log(decNumber);
    }
    while(!hStack.isEmpty()) {
      console.log(hStack.items);
      binaryString += hStack.toString(hStack.items.pop());
    }
    return binaryString;
  }
}