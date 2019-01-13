class Node {
    constructor(element) {
        this.element = element;
        this.next = null;

    }
}

class linkedList {

    constructor(item) {
        this.head = new Node(item);
        this.length = 1;
    }


    /**
     * @description 插入元素
     * @param {需要插入的元素} newItem 
     * @param {插入到某一元素之后} beforeItem 
     */
    insertIndex(newItem, beforeItem) {
        // class 里面不能new自己的函数 就是不能 new this.Node() 所以 Node需要新成立一个
        let newNode = new Node(newItem);
        if (beforeItem) { // 判断是否是插入到指定节点后面，如果不是则插入到最后一个节点
            let currentNode = this.find(beforeItem);
            // console.log('currentNode:', currentNode);
            // console.log('newNode:', newNode);
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        } else {
            let lastNode = this.findLastNode();
            lastNode.next = newNode;
        }
        this.length++;
    }

    // 插入的是一个循环链, 最后闭环的时候使用
    // 传入最后要形成闭环的那个已经存在的环
    insertCircle(beforeItem) {
        // 获取到当前的最后节点，修改它的next 指向要形成环的那个节点
        let lastNode = this.findLastNode();
        let beforeNode = this.find(beforeItem);
        // 判断是否已经存在这个节点
        if (beforeNode) {
            // 拿到当前的
            let currentNode = beforeNode;
            // 指向可以形成环的那个节点
            lastNode.next = currentNode;
        } else {
            throw Error('当前不存在这个节点，无法形成闭环，请重新输入');
        }
    }

    // 移除指定节点
    remove(item) {
        let currentNode = this.head;
        while (currentNode.element != item) {
            currentNode = currentNode.next;
        }
        // console.log('pre:', this.findPreNode(currentNode));
        this.findPreNode(currentNode.element).next = currentNode.next;
        currentNode.next = null;

        this.length--;
    }

    // 根据元素找到这个元素所在的位置
    find(item) {
        let currentNode = this.head;
        console.log(currentNode.element, item);
        while (currentNode.element !== item) {
            if (!currentNode.next) {
                // throw Error
                throw Error('找不到这个元素');
            }
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    // 找到前一个node
    findPreNode(item) {
        let currentNode = this.head;
        // 当前节点不为空、当前节点的下一个节点不为空、当前节点的下一个节点不等于 item
        while (currentNode && currentNode.next && currentNode.next.element !== item) {
            // 判断一下下一个节点是不是最后一个节点
            if (currentNode.next) {
                currentNode = currentNode.next;
            } else {
                currentNode = null;
            }
        }
        console.log('curr:', currentNode);
        // 返回符合条件的节点
        return currentNode;
    }


    // 找到最后一个节点
    findLastNode() {
        // 先让当前节点等于头节点
        let currentNode = this.head;
        // 单向链表中的最后一个节点的next 指向null
        while (currentNode.next) {
            // 一直到最后一个节点
            currentNode = currentNode.next;
        }
        // 返回最后一个节点
        return currentNode;
    }
    


    // 重写toString方法
    display() {
        var currNode = this.head;
        while (currNode !== null){
            console.log( currNode.element );
            currNode = currNode.next;
        }
    }

    // 反转链表
    reverseList() {
        // 定义一个前节点
        let preNode = null;

        // this.head 就相当于currentNode一样
        // 判断当前的头节点是否为空
        while (this.head) {
            // console.log('this.head:', this.head);
            // 拿到下一个节点
            let nextNode = this.head.next;
            // 把当前的节点指向前一个节点，当这个节点是是原链表的头节点的时候，它指向的就是null
            this.head.next = preNode;
            // 把前一个节点等于当前节点
            preNode = this.head;
            // 当前的的节点又变成下一个节点
            this.head = nextNode;
        }
        // 因为上面判断条件是，当this.head === null 的时候跳出循环，所以需要将this.head重新变为前一个节点
        this.head = preNode;
        console.log('this.head:', this.head);
        return this.head;
    }

    reverseList_dg(head) {
        
        if (!head || !head.next) {
            
            return head;
        }
        
        // console.log('____head:', head);
        // 递归把每一个节点传递进去
        var newHead = this.reverseList_dg(head.next);
        // console.log('dg_____newHead:', newHead);
        console.log('head ___ head:', head);
        head.next.next = head;
        console.log('head.next.next:', head.next.next);
        head.next = null;
        
        this.head = newHead;
        return newHead;
    }

    // 判断当前是否是链表中是否存在环
    // 主要的实现思想就是，定义两个指针，fast每次走两步，slow每次只走一步
    isLoop() {

        // 都从头节点开始
        let currentSlow = this.head;
        let currentFast = this.head;

        // 快指针先走到尾，如果快指针到尾都没相等，单链表中不存在环
        // 因为块指针走的是两步，所以判断currentFast这个node节点最好，不要去判断currentNode.next
        while(currentFast) {
            // console.log('currentSlow:', currentSlow);
            // console.log('currentFast:', currentFast);
            // 快指针走两步
            currentFast = currentFast.next.next;
            // 慢指针走一步
            currentSlow = currentSlow.next;
            // 判断快慢指针相等并且不等于头节点的时候，说明这个单链表中有环存在
            if (currentFast == currentSlow && currentFast != this.head) {
                return true;
            }
            
            // slow = currentSlow.next;
        }
        return false;
    }

}