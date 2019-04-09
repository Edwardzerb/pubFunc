class circularQueue {
    constructor() {
        this.head = 0;
        this.tail = 0;
        this.items = [];
        this.size = 0;
    }

    setSize(size) {
        this.size = size;
    }

    enqueue(item) {
        // 当队列满的时候
        if ((this.tail + 1) % n == this.head) {
            throw Error('队列已经满了，请进行扩容或者出队操作');
        }

        this.items[this.tail] = item;

        // 这是一个循环队列，所以计算位置就不是++了
        this.tail = (this.tail + 1) % n;
        return true;
    }

    dequeue() {
        if (this.tail == this.head) {
            throw Error('队列是空的，请先入队');
        }

        let ret = this.items[this.head];
        this.head = (this.head + 1) % n;

        return ret;
    }
}