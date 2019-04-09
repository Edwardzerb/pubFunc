class stackNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class stackList {
    constructor(size) {
        this.size = size;
        this.length = 0;
        this.top = null;
    }

    push(element) {

        if (this.length >= this.size) {
            throw Error('栈溢出了，请重新定义栈的size');
        }
        
        let newNode = new stackNode(element);

        if (this.top) {
            newNode.next = this.top;
            this.top = newNode;
        } else {
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.top) {
            let newNode = this.top;
            this.top = this.top.next;
            newNode = null;
            this.length --;
        } else {
            throw Error('栈已经空了');
        }
    }

    display() {
        let currentNode = this.top;

        while(currentNode != null) {
            currentNode = currentNode.next;
        }

        // for(let i = 0; i < this.length; i++) {

        // }
    }

}