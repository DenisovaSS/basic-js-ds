const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class SructureTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.startPoint = null;
  }
  root() {
    return this.startPoint;
  }

  add(data) {
    this.startPoint = addNode(this.startPoint, data);
    function addNode(node, data) {
      if (!node) {
        return new SructureTree(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.startPoint, data);
    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.startPoint, data);
    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.startPoint = removeNode(this.startPoint, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.right && !node.left) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        // let maxLeftNode = node.left;
        // node.data = maxLeftNode.data;
        // node.left = removeNode(node.left, maxLeftNode.data);
        // return node;
        let minNodeRight = node.right;
        while (minNodeRight.left) {
          minNodeRight = minNodeRight.left;
        }
        node.data = minNodeRight.data;
        node.right = removeNode(node.right, minNodeRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.startPoint) {
      return;
    }
    let node = this.startPoint;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.startPoint) {
      return;
    }
    let node = this.startPoint;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}
let tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(14));
console.log(tree.has(8));
console.log(tree.has(9));
console.log(tree.has(2));
console.log(tree.has(6));
console.log(tree.has(128));
console.log(tree.has(31));
console.log(tree.has(54));
console.log(tree.has(1));
module.exports = {
  BinarySearchTree,
};
