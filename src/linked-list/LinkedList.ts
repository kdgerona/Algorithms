import AbstractLinkedList from './AbstractLinkedList';
import ListNode from './ListNode';

class LinkedList<T = any> extends AbstractLinkedList<T> {
  constructor(head?: ListNode<T> | null) {
    super();
    this.head = head || null;
  }

  sort(): LinkedList<any> {
    return this;
  }
}

export default LinkedList;
