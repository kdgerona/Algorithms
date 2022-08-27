import LinkedList from '../LinkedList';
import ListNode from '../ListNode';
import BubbleSort from '../sorting-algorithms/BubbleSort';

class InsertionSort<T = any> extends BubbleSort<T> {
  constructor() {
    super();
  }

  sort(): LinkedList<T> {
    if (this.head === null) return this;

    const sorted_list = new BubbleSort<T>();
    let head_pointer = this.head;

    do {
      const next_pointer = head_pointer?.right;

      if (!next_pointer) {
        sorted_list.push(head_pointer.value);
        sorted_list.sort();
        this.head = sorted_list.head;
        break;
      }

      if (head_pointer.value > next_pointer?.value) {
        const swapped_node = this.swap(head_pointer, next_pointer);
        sorted_list.push(swapped_node.value);

        head_pointer = swapped_node.right as ListNode<T>;
      } else {
        sorted_list.push(head_pointer.value);
        head_pointer = next_pointer;
      }

      sorted_list.sort();
    } while (head_pointer !== null);

    return this;
  }

  // Reverse Insert Sort
  reverseSort(node: ListNode): LinkedList {
    if (node === null) return node;

    const sorted_list = new BubbleSort<T>();
    let head_pointer = node;

    do {
      const next_pointer = head_pointer?.left;

      if (!next_pointer) {
        sorted_list.push(head_pointer.value);
        sorted_list.sort();
        this.head = sorted_list.head;
        break;
      }

      if (head_pointer.value > next_pointer?.value) {
        const swapped_node = this.swap(head_pointer, next_pointer);
        sorted_list.push(swapped_node.value);

        head_pointer = swapped_node.left as ListNode<T>;
      } else {
        sorted_list.push(head_pointer.value);
        head_pointer = next_pointer;
      }

      sorted_list.sort();
    } while (head_pointer !== null);

    return this;
  }
}

export default InsertionSort;
