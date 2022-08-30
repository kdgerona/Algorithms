class LeafNode<T = any> {
  left: LeafNode | null = null;
  right: LeafNode | null = null;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export default LeafNode
