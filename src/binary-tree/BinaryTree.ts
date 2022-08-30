import LeafNode from './LeafNode';

class BinaryTree<T = any> {
  root: LeafNode | null = null;

  push(value: T) {
    if (!this.root) {
      this.root = {
        left: null,
        right: null,
        value,
      };

      return;
    }

    this.setter(this.root, value)
  }

  hasNode(node: LeafNode | null) {
    return !!node;
  }

  setter(node: LeafNode, value: T) {
    if(!node) return

    // Set to right leaf
    if (node.value >= value) {
      if (node.right) {
        this.setter(node?.right, value);
        return;
      }

      node.right = {
        left: null,
        right: null,
        value,
      };
    } else {
      // Set to left leaf
      if (node.left) {
        this.setter(node?.left, value);
        return;
      }

      node.left = {
        left: null,
        right: null,
        value,
      };
    }
  }

  // Left, Root, Right
  inOrder(node: LeafNode | null){
    if(!node) return

    this.inOrder(node.left)

    console.log(node.value)

    this.inOrder(node.right)
  }

  // Root, Left, Right
  preOrder(node: LeafNode | null) {
    if(!node) return

    console.log(node.value)

    this.preOrder(node.left)

    this.preOrder(node.right)
  }

  // Left, Right, Root
  postOrder(node: LeafNode | null){
    if(!node) return

    this.postOrder(node.left)

    this.postOrder(node.right)

    console.log(node.value)
  }

  traverse(){
    this.inOrder(this.root)
    // this.preOrder(this.root)
    // this.postOrder(this.root)
}
}

export default BinaryTree;
