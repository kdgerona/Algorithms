export class ListNode<T = any> {
  value: T;
  right: ListNode<T> | null;
  left: ListNode<T> | null;
  constructor(value: T) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

export class LinkedList<T = any> {
  head: ListNode<T> | null;

  constructor() {
    this.head = null;
  }
  push(value: T): T {
    const node: ListNode<T> = {
      value,
      left: null,
      right: null,
    };

    if (this.head == null) {
      this.head = node;
      return value;
    }

    let curr: ListNode<T> = this.head;
    while (curr.right != null) {
      curr = curr.right;
    }
    node.left = curr;
    curr.right = node;

    return value;
  }
  pop(): T | null {
    if (this.head == null) return null;
    let cur = this.head;
    while (cur.right != null) {
      cur = cur.right;
    }
    let curValue = cur.value;
    if (cur.left === this.head) {
      this.head = null;
    } else {
      cur.left!.right = null;
    }

    return curValue;
  }
  shift(): T | null {
    if (this.head === null) return null;
    let headValue = this.head.value;

    if (this.head.right === null) {
      this.head = null;
    } else {
      this.head.right!.left = null;
      this.head = this.head.right;
    }
    return headValue;
  }
  getAll(): Array<T> {
    if (this.head == null) return [];
    if (this.head.right === null) return [this.head.value];

    let values = [];
    let cur: ListNode<T> | null = this.head;
    while (cur != null) {
      values.push(cur.value);
      cur = cur.right;
    }

    return values;
  }
  get(index: number): T | null {
    if (!this.head) return null;

    // if(index == 0 )

    let count = 0;
    let cur = this.head;
    let value: T | null = null;
    while (count <= index && cur != null) {
      value = cur.value;
      count++;
      //@ts-ignore
      cur = cur.right;
    }

    return value;
  }
  remove(index: number): void {
    if (!this.head) return;

    // if(index == 0 )

    let count = 0;
    let cur = this.head;
    while (count != index && cur != null) {
      count++;
      //@ts-ignore
      cur = cur.right;
    }

    if (cur === this.head) {
      this.head = null;
      return;
    }

    if (cur != null) {
      const { left, right } = cur;

      cur.left!.right = right;
      cur.right!.left = left;
    }
  }
  splice(value: T, index: number = 0): T | null {
    if (index < 0) return null;
    if (this.head == null && index > 0) return null;
    if (this.head == null && index == 0) return this.push(value);

    let count = 0;
    let cur = this.head;
    while (count != index && cur != null) {
      cur = cur?.right;
      count++;
    }
    if (count != index) {
      return null;
    } else {
      const node: ListNode<T> = {
        left: cur!.left,
        right: cur,
        value,
      };
      cur!.left!.right = node;
    }

    return value;
  }

  map<P = any>(fn: (item: T) => P): Array<P> {
    if (this.head === null) return [];

    const results = [];
    let cur = this.head;
    while (cur != null) {
      results.push(fn(cur.value));
      cur = cur.right as ListNode<T>;
    }

    return results;
  }

  forEach(fn: (item: ListNode<T>) => void): void {
    if (this.head === null) return;

    let cur = this.head;
    while (cur != null) {
      fn(cur);
      cur = cur.right as ListNode<T>;
    }

    return;
  }

  sort<P = any>(): Array<T> {
    if (this.head === null) return [];

    let temp_head = this.head;
    let head_pointer = this.head;
    let should_execute_swap_operation = true;
    let swap_operation_count = 0;

    do {
      const next_pointer = head_pointer.right as ListNode<T>;

      if (!next_pointer) {
        console.log(`Swap Operation Count - ${swap_operation_count}`)
        if (swap_operation_count !== 0) {
          console.log('Reevaluating...');
          head_pointer = temp_head;
          swap_operation_count = 0;
          should_execute_swap_operation = true;

          continue;
        } else {
          should_execute_swap_operation = false;
          break;
        }
      }

      console.log(
        'Evaluating...',
        head_pointer.value,
        next_pointer?.value ?? null
      );
      if (head_pointer.value > next_pointer?.value) {
        const swapped_node = this.swap(head_pointer, next_pointer);
        swap_operation_count += 1;

        if (!swapped_node.left) temp_head = swapped_node;

        head_pointer = swapped_node.right as ListNode<T>;
      } else {
        head_pointer = next_pointer;
      }
    } while (head_pointer !== null && should_execute_swap_operation);

    this.head = temp_head;
    const getList = this.getAll();

    return getList;
  }

  swap(anode: ListNode<T>, bnode: ListNode<T>): ListNode<T> {
    const clonedNode = { ...anode };

    anode.value = bnode.value;
    bnode.value = clonedNode.value;

    return anode;
  }
}

const list = new LinkedList<number>();
list.push(50);
list.push(10);
list.push(40);
list.push(20);

console.log(`Items`, list.getAll());
console.log(`Sorted Items`, list.sort());
