class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // 向链表最后后插入元素
    insertLast(element) {
        let newNode = new Node(element);
        let currentNode = this.head;

        if (this.head === null) {
            this.head = newNode;
            return;
        } 
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }
    // 向指定元素插入
    insertValue(newElement, element) {
        let node = this.findByValue(element);
        let newNode = new Node(newElement);
        if (node === -1) {
            throw Error('未找到插入位置');
        } else {
            let nextNode = node.next;
            node.next = newNode;
            newNode.next = nextNode;
        }
    }

    // 向指定下表插入元素
    insertIndex(newElement, index) {
        let node = this.findByIndex(index);
        let newNode = new Node(newElement);
        if (node === -1) {
            throw Error('未找到插入位置');
        }

        let nextNode = node.next;
        node.next = newNode;
        newNode.next = nextNode;
    }

    // 根据value查找节点
    findByValue(item) {
        let currentNode = this.head;
        while(currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next;
        }

        return currentNode ? currentNode : -1;
    }

    // 根据下标查找节点
    findByIndex(index) {
        let currentNode = this.head;
        let pos = 0;

        while(currentNode !== null && index !== pos) {
            currentNode = currentNode.next;
            pos ++;
        }
        return currentNode ? currentNode : -1;
    }

    // 查找前一个节点
    findPrev(item) {
        let currentNode = this.head;
        let prev = null;
        while(currentNode !== null && currentNode.element !== item) {
            prev = currentNode;
            currentNode = currentNode.next;
        }

        return currentNode ? prev : -1;
    }

    // 根据值删除
    remove(item) {
        let desNode = this.findByValue(item);
        if (desNode === -1) {
            throw Error('未找到插入位置');
        }
        let preNode = this.findPrev(item);
        preNode.next = desNode.next;
        // delete desNode;
    }

    // 反转链表递归
    reverse_dg(head) {

        if (!head || !head.next) {
            return head;
        }

        // 递归把每一个节点传进去
        let newNode = this.reverse_dg(head.next);
        // 将后一个节点的指针指向前一个节点
        head.next.next = head;
        // 将下个一个指针先指为空
        head.next = null;
        // 重新修改this.head
        this.head = newNode;

        return this.head;

    }

    reverse(head) {
        let preNode = null;
        let currentNode = head;
        while(currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = preNode;
            preNode = currentNode;
            currentNode = nextNode;
        }
        this.head = preNode;
        return this.head;
    }

    // 遍历显示所有节点
    display () {
        let currentNode = this.head
        let str = '';
        while (currentNode !== null) {
            str += JSON.stringify(currentNode.element) + '->';
            // console.log(currentNode.element) ;
            // console.log('->');
            currentNode = currentNode.next
        }
        console.log(str);
    }
}