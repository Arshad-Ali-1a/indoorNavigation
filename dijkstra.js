// const readline = require("readline");

// Enter the number

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }

  static GreaterPriority(a, b) {
    if (a.priority > b.priority) return a;
    else if (a.priority < b.priority) return b;
    else return b.value > a.value ? b : a;
  }
}

class PriorityQueue {
  constructor() {
    this.elements = [];
    // this.priorities = {};
  }

  enqueue(node) {
    // var node=new Node(element, priority);
    this.elements.push(node);
    // this.priorities[element] = priority;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const highestPriorityElement = this.elements.reduce((acc, curr) => {
      return Node.GreaterPriority(acc, curr);
    });

    const index = this.elements.indexOf(highestPriorityElement);
    this.elements.splice(index, 1);
    // delete this.priorities[highestPriorityElement];

    return highestPriorityElement;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

function Dijsktra(n, adj, starting_node) {
  //starting_node is value
  let pq = new PriorityQueue();

  let dist = Array(n).fill(Infinity);

  let path = new Array(n);
  for (let i = 0; i < n; i++) {
    path[i] = new Array();
  }

  pq.enqueue(starting_node);
  dist[starting_node.value] = 0;

  while (!pq.isEmpty()) {
    let node = pq.dequeue();
    let node_value = node.value;
    let node_priority = node.priority;

    for (let x of adj[node_value]) {
      let new_dist = dist[node_value] + x.priority;

      if (new_dist < dist[x.value]) {
        dist[x.value] = new_dist;
        path[x.value] = path[node_value].concat([node_value]);
        // if (x.value>=0)console.log(x)
        pq.enqueue(x);
      }
    }
  }
  // console.log(path)
  for (let i = 0; i < path.length; i++) {
    if (path[i].length != 0) path[i].push(i);
  }
  return { distance: dist, path: path };
}

// console.log("\n\n");

let adj_node = [
  [new Node(4, 77), new Node(1, 99)],
  [new Node(0, 99), new Node(4, 24), new Node(3, 31), new Node(2, 17)],
  [new Node(1, 17), new Node(3, 72)],
  [new Node(1, 31), new Node(2, 72), new Node(4, 10)],
  [new Node(0, 77), new Node(1, 24), new Node(3, 10)],
];
const total_nodes = 5;

//......................................................................................................................

// let adj_node = [
//   [new Node(1, 4), new Node(7, 8)], //0
//   [new Node(0, 4), new Node(2, 8), new Node(7, 11)], //1
//   [new Node(1, 8), new Node(3, 7), new Node(5, 4), new Node(8, 2)], //2
//   [new Node(2, 7), new Node(4, 9), new Node(5, 14)], //3
//   [new Node(3, 9), new Node(5, 10)], //4
//   [new Node(2, 4), new Node(3, 14), new Node(4, 10), new Node(6, 2)], //5
//   [new Node(5, 2), new Node(7, 1), new Node(8, 6)], //6
//   [new Node(0, 8), new Node(1, 11), new Node(6, 1), new Node(8, 7)], //7
//   [new Node(2, 2), new Node(6, 6), new Node(7, 7)], //8
// ];
// const total_nodes=10; //10th node is disconnected.

function main() {
  console.log(adj_node);
  let starting_node = new Node(0, 0);

  console.log(Dijsktra(total_nodes, adj_node, starting_node)); //9th(0 based index) node is not connected to anyother
}

// main();

export { Dijsktra, Node };
