class Node {
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
        this.preStr = '';
        this.inStr = '';
        this.postStr = '';
    }

    insert(item) {
        let newNode = new Node(item);

        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let p = this.root;
        while (p) {
            if (p.element < item) {
                if (p.right == null) {
                    p.right = newNode;
                    return;
                }
                p = p.right;
            } else {
                if (p.left == null) {
                    p.left = newNode;
                    return;
                }
                p = p.left;
            }
        }

        this.root = p;
    }

    remove(item) {
        if (this.root === null) {
            throw Error('该二叉树为空');
        }

        let i
    }

    // 先序遍历
    preOrder(root, isClear) {
        if (root === null) {
            return;
        }

        if (!isClear) {
            this.preStr = '';
        }

        // console.log(root);
        this.preStr += root.element + '->';
        this.preOrder(root.left, true);
        this.preOrder(root.right, true);
    }

    // 中序遍历
    inOrder(root) {
        if (root == null) {
            return;
        }
        this.inOrder(root.left);
        this.inStr += root.element + '->';
        // console.log(root);
        this.inOrder(root.right);
    }

    // 后序遍历
    postOrder(root) {
        if (root === null) {
            return;
        }

        this.postOrder(root.left);
        this.postOrder(root.right);
        this.postStr += root.element + '->';
        // console.log(root);
    }

    // 二叉树的删除
    delete(data) {
        // p 指向要删的节点，初始化指向根节点
        let p = this.root;

        // 记录的是p的父节点
        let pp = null;

        while (p !== null && p.element !== data) {
            // console.log('p:', p);
            pp = p;

            if (p.element > data) {
                p = p.left;
            } else {
                p = p.right;
            }
        }

        // console.log('p:', p);

        // 没有找到
        if (p === null) {
            throw Error('没有找到要删除的节点');
            return;
        }

        // 删除的节点有两个子节点
        if (p.left !== null && p.right !== null) {
            // this.display();
            // console.log('p:', p);
            // 找到右子树中最小的节点
            let minP = p.right;

            // minPP 表示minP的父节点
            let minPP = p;

            while (minP.left != null) {
                minPP = minP;

                minP = minP.left;
            }

            // console.log('minPP:', minPP);
            // console.log('minP:', minP);

            // 将minP的数据替换到p中
            p.element = minP.element;
            
            console.log('p:', p);
            console.log('pp:', pp);
            console.log('minP:', minP);
            console.log('minPP:', minPP);

            // 下面就变成了删除 minP了
            p = minP;
            
            pp = minPP;

            console.log('p1:', p);
            console.log('pp1:', pp);
            console.log('minP1:', minP);
            console.log('minPP1:', minPP);

            // if (minPP.left === null) {
            //     minPP.right = null;
            // } else {
            //     minPP.left = null;
            // }

        }

        // 删除节点是叶子节点或者仅有一个子节点
        let child;
        if (p.left != null) {
            child = p.left;
        } else if (p.right !== null) {
            child = p.right;
        } else {
            child = null;
        }
        console.log('child:', child);
        // 删除的是根结点
        if (pp == null) {
            this.root = child;
        } else if (pp.left == p) {
            pp.left = child;
        } else {
            pp.right = child;
        }

    }


    // 打印二叉树
    display() {
        if (this.preStr) {
            console.log('preOrder:', this.preStr);
        }
        if (this.inStr) {
            console.log('inOrder:', this.inStr);
        }
        if (this.postStr) {
            console.log('postOrder:', this.postStr);
        }
    }
}