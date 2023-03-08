class Graph {
  constructor(direct = true) {
    this.direct = direct;
    this.nodes = [];
    this.edges = new Map();
  }

  addNode(key, value = key) {
    this.nodes.push({ key, value });
  }

  addEdge(a, b, weight) {
    this.edges.set(JSON.stringify([a, b]), { a, b, weight });
    if (!this.direct) {
      this.edges.set(JSON.stringify([b, a]), { b, a, weight });
    }
  }

  removeNode(key) {
    this.nodes = this.nodes.filter((n) => n.key != key);
    [...this.edges.values()].forEach(({ a, b }) => {
      if (a === key || b === key) this.edges.delete(JSON.stringify([a, b]));
    });
  }

  removeEdge(a, b) {
    this.edges.delete(JSON.stringify([a, b]));
    if (!this.direct) this.edges.delete(JSON.stringify([a, b]));
  }

  findNode(key) {
    return this.nodes.find((x) => x.key === key);
  }

  hasEdge(a, b) {
    return this.edges.has(JSON.stringify([a, b]));
  }
  setEdgeWeight(a, b, weight) {
    this.edges.set(JSON.stringify([a, b]), weight);
    if (!this.direct) this.edges.set(JSON.stringify([b, a]), weight);
  }

  getEdgeWeight(a, b) {
    return this.edges.get(JSON.stringify([a, b]));
  }
  // 连接的节点
  adjacent(key) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (a === key) acc.push(b);
      return acc;
    }, []);
  }
  // 某个节点的入度
  inDegree(key) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (b === key) acc++;
      return acc;
    }, 0);
  }

  outDegree(key) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (a === key) acc++;
      return acc;
    }, 0);
  }
}

// draft ------------------------------------
const g = new Graph();

g.addNode("a");
g.addNode("b");
g.addNode("c");
g.addNode("d");

g.addEdge("a", "c");
g.addEdge("b", "c");
g.addEdge("c", "b");
g.addEdge("d", "a");
// g.addEdge("c", "666");

// g.nodes.map((x) => console.log(x.value)); // ['a', 'b', 'c', 'd']
// [...g.edges.values()].map(({ a, b }) => console.log(`${a} => ${b}`));
// ['a => c', 'b => c', 'c => b', 'd => a']

console.log(g.adjacent("c")); // ['b']

g.inDegree("c"); // 2
g.outDegree("c"); // 1

g.hasEdge("d", "a"); // true
g.hasEdge("a", "d"); // false

g.removeEdge("c", "b");

[...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
// ['a => c', 'b => c', 'd => a']

g.removeNode("c");

g.nodes.map((x) => x.value); // ['a', 'b', 'd']
[...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
// ['d => a']

g.setEdgeWeight("d", "a", 5);
g.getEdgeWeight("d", "a"); // 5
