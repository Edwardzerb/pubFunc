class ArrayQueue {
    constructor() {
        this.head = 0;
        this.tail = 0;
        this.items = [];
    }

    setSize(size) {
        this.size = size;
    }

    

    // 入队 优化
    // 主要是不能每出队一个就去挪动队列的元素，等到移除完毕了，要进队的时候再去把他们给清除掉
    enqueue(item) {
        if (this.tail === this.size) {
            if (this.head == 0) {
                return false;
            }

            // 数据搬移
            for(let i = head; i < this.tail; i++) {
                this.items[i - head] = this.items[i];

            }

            // 搬移完之后重新更新head 和 tail
            tail -= head;
            head = 0;
        }

        this.items[tail] = item;
        ++this.tail;


        return true;
    }

    dequeue() {
        if (this.head === this.tail) {
            return null;
        }

        let ret = this.items[this.head];
        ++ this.head;
        return ret;
    }
}