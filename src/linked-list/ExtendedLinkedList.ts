import LinkedList from './LinkedList';
import ListNode from './ListNode';

class ExtendedLinkedList<T = any> extends LinkedList<T> {
  constructor(head?: ListNode<T> | null) {
    super();
    this.head = head || null;
  }

  sort(): LinkedList<any> {
    return this;
  }
}

export default ExtendedLinkedList;
