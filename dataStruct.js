class dataStr {
  constructor () {
    this.items = [];
  }
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


  class Queue extends dataStr {
    constructor() {
      super();
    }
    // 向队列尾部添加一个（或是多个）元素  入队
    enqueue(element) {

      this.items.push(element);
    };
    // 移除队列的第一个元素，并返回被移除的元素 出队
    dequeue() {
      return this.items.shift()
    };
    //返回队列的第一个元素——最先被添加的,也将是最先被移除的元素。队列不做任何变动。（不移除元素，只返回元素信息。与stack的peek方法类似）
    front() {
      return this.items[0];
    };

    /*
      击鼓传花游戏，在这个游戏中，孩子们围成一个圆圈，把花尽快的传递给旁边的人。某一时刻传花停止，这个时候花落在谁手里，谁就退出圆圈结束游戏。重复这个过程，直到只剩下一个孩子。
     */ 
    function hotPotato(nameList, num) {
      let queue = new Queue();
      this.items = nameList
      for(let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
      }
      let eliminated = '';
      // 最后面只剩一个人
      while(queue.size() > 1) {
        for(let i = 0; i < num; i++) {
          // 一直出队再入队，知道要出的那个人前一个跳出循环
          queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log('在游戏中淘汰了: ', eliminated);
      }
      // 返回最后一个胜利者
      return queue.dequeue();
    }
    
  }

  // 优先队列  优先存储
  // 思路两个
  // 
  class PriorityQueue extends Queue {
    constructor() {
      super();
    }
  }

  
  class BinarySearchTree extends dataStr {
    constructor(key) {
      super();
      this.key = key;
      this.left = null;
      this.right = null;
      this.root = null;
    };

    // 向树中插入一个新的键(节点);
    insert(key) {
      let newNode = new Node(key);

      //  判断是否是第一个节点，如果是作为根节点保存，不是调用insertNode方法
      if (this.root === null) {
        this.root = newNode;
      } else {
        insertNode(root, newNode);
      }
    };

    // 
    insertNode(node, newNode) {
      // 判断两个节点的大小，根据二叉搜索树的特点左子树上所有节点的值均小于它的根据点的值，右子树上所有节点的值均大于它的根据点的值
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    };

    getRoot() {
      return this.root;
    };

    // 在书中查找一个键，如果节点存在，返回true;如果不存在，返回false;
    search(key) {
      return searchNode(this.root, this.key);
    };


    searchNode(node, key) {
      if (node === null) {
        return false;
      }
      if (key < node.key) {
        return searchNode(node.left, key);
      } else if (key > node.key) {
        return searchNode(node.right, key);
      } else { // element is equal to node.item
        return true;
      }
    };

    // 通过中序遍历方式遍历所有节点
    inOrderTraverse(callback) {
      inOrderTraverseNode(this.root, callback);
    };

    inOrderTraverseNode(node, callback) {
      if (node != null) {
        callback(node.key);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
      }
    };

    // 通过先序遍历方式遍历所有的节点；
    postOrderTraverse(callback) {
      postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback) {
      if (node != null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key);
      }
    };

    // 返回树中的最小值；
    min() {
      return minNode(this.root);
    }

    minNode(node) {
      if (node) {
        while(node && node.left !== null) {
          node = node.left;
        }

        return node.key;
      }

      return null;
    };

    // 返回树中的最大值；
    max() {
      return maxNode(this.root);
    };

    maxNode(node) {
      if (node) {
        while(node && node.right !== null) {
          node = node.right;
        }

        return node.key;
      }

      return null;
    }

    // 从树中移除某个键；
    remove(element) {
      return removeNode(this.root, element);
    };

    findMinNode(node) {
      while(node && node.left !== null) {
        node = node.left;
      }

      return node;
    };

    removeNode(node, element) {
      if (node === null) {
        return null;
      }
      if (element < node.key) {
        node.left = removeNode(node.left, element);
        return node;
      } else if (element > node.key) {
        node.right = removeNode(node.right, element);
        return node;
      } else {
        //处理三种特殊情况
        //1 - 叶子节点
        //2 - 只有一个孩子的节点
        //3 - 有两个孩子的节点
        //case 1
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        // case 2
        if (node.right === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          return node;
        }

        // case 3
        let aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;
      }
    }

  }
}