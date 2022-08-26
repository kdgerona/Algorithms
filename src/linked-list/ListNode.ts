class ListNode<T = any> {
  value: T;
  right: ListNode<T> | null;
  left: ListNode<T> | null;
  constructor(value: T) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

export default ListNode;
