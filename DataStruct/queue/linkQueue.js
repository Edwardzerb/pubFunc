class queueNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class circleQueue {
    constructor() {
        this.head = 0;
        this.front = null;
        this.rear = new queueNode(null);
    }

    setSize(size) {
        this.size = size;
    }

    enqueue(item) {
        let newNode = new queueNode(item);

        if (this.front == null) {
            this.front = newNode;
        }

        this.rear.next = newNode;
        this.rear = newNode;

    }

    dequeue() {
        if (this.rear == this.front) {
            return false;
        }

        let oldNode = this.front;
        this.front = this.front.next;
        oldNode.next = null;

        return oldNode.element;
    }
}