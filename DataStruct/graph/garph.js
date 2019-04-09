import linkedList from '../link/linkedList.js';

class Graph {   // 无向图
    constructor() {
        let adj = new linkedList();
        for(let i = 0; i < 5; i++) {
            adj[i] = new linkedList();
        }
    }
}