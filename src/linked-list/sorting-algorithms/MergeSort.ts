import LinkedList from '../LinkedList';
import ListNode from '../ListNode';
import ExtendedLinkedList from '../ExtendedLinkedList';

class MergeSort<T = any> extends LinkedList {
  left_list?: ExtendedLinkedList<LinkedList>;
  right_list?: ExtendedLinkedList<LinkedList>;
  pointer?: ExtendedLinkedList<T>;

  constructor() {
    super();
  }

  merge(): any {
    const count = this.pointer?.getAll();
    // const count = this.getAll();
    console.log('count', count);
  }

  mergeSort(): any {}

  sort(): LinkedList<T> {
    this.pointer = new ExtendedLinkedList<T>(this.head);
    this.left_list = new ExtendedLinkedList<LinkedList>();
    this.right_list = new ExtendedLinkedList<LinkedList>();

    let count;
    // while(this.pointer.){
        
    // }

    return this;
  }
}

export default MergeSort;
