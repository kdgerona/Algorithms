import AbstractLinkedList from '../AbstractLinkedList';
// import ListNode from '../ListNode';
import LinkedList from '../LinkedList';

class MergeSort<T = any> extends AbstractLinkedList {
  left_list?: LinkedList<AbstractLinkedList>;
  right_list?: LinkedList<AbstractLinkedList>;
  pointer?: LinkedList<T>;

  constructor() {
    super();
  }

  merge(): any {
    const count = this.pointer?.getAll();
    // const count = this.getAll();
    console.log('count', count);
  }

  mergeSort(): any {}

  sort(): AbstractLinkedList<T> {
    this.pointer = new LinkedList<T>(this.head);
    this.left_list = new LinkedList<AbstractLinkedList>();
    this.right_list = new LinkedList<AbstractLinkedList>();

    let count;
    // while(this.pointer.){
        
    // }

    return this;
  }
}

export default MergeSort;
