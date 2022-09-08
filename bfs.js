const bfs = function (graph, start) {
    /**
     * Steps:
     * * push the 1st edge/node item in a queue
     * * mark that node as visited
     * * while queue not empty:
     * ** take the 1st item in queue
     * ** if graph has adjacent neighbours for this node:
     * *** for each neighbour:
     * **** if this neighbour is not visited: mark as visited, push into the queue
     */

    let visited = new Set();
    let queue = [];
    visited.add(start);
    queue.push(start);

    while (queue.length) {
        let edge = queue.shift();
        console.log('Edge: ', edge);
        if (graph.has(edge)) {
            for (const adj of graph.get(edge)) {
                console.log('adj: ', adj);
                if (!visited.has(adj)) {
                    visited.add(adj);
                    queue.push(adj);
                }
                console.log('queue: ', queue);
            }
        }
    }
    console.log('visited: ', visited);
}

const graph = new Map();
graph.set(0, [1,2,3]);
graph.set(1, [2]);
graph.set(2, [4]);
console.log('graph: ', graph);

bfs(graph, 0)
