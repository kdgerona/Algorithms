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

  sort(): LinkedList<T> {
    if (this.head === null) return this;

    let temp_head = this.head;
    let head_pointer = this.head;
    let should_execute_swap_operation = true;
    let swap_operation_count = 0;

    do {
      const next_pointer = head_pointer.right as ListNode<T>;

      if (!next_pointer) {
        console.log(`Swap Operation Count - ${swap_operation_count}`);
        if (swap_operation_count !== 0) {
          console.log('Reevaluating...');
          head_pointer = temp_head;
          swap_operation_count = 0;
          should_execute_swap_operation = true;

          continue;
        } else {
          this.head = temp_head;
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

    return this;
  }

  swap(anode: ListNode<T>, bnode: ListNode<T>): ListNode<T> {
    const clonedNode = { ...anode };

    anode.value = bnode.value;
    bnode.value = clonedNode.value;

    return anode;
  }

  insertionSort(): LinkedList<T> {
    if (this.head === null) return this;

    const sorted_list = new LinkedList<T>();
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

  getNode(index: number): ListNode<T> | null {
    if (!this.head) return null;

    // if(index == 0 )

    let count = 0;
    let cur = this.head;
    let node: ListNode<T> | null = null;
    while (count <= index && cur != null) {
      node = cur;
      count++;
      //@ts-ignore
      cur = cur.right;
    }

    return node;
  }

  shellSort() {
    // let arr = list.getAll();
    // const n = arr.length;

    // const tgap = Math.floor(n / 2);
    // console.log('Floor', tgap, n / 2, tgap / 2);

    // // Start with a big gap, then reduce the gap
    // for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    //   // Do a gapped insertion sort for this gap size.
    //   // The first gap elements a[0..gap-1] are already
    //   // in gapped order keep adding one more element
    //   // until the entire array is gap sorted
    //   for (let i = gap; i < n; i += 1) {
    //     // add a[i] to the elements that have been gap
    //     // sorted save a[i] in temp and make a hole at
    //     // position i
    //     let temp = arr[i];

    //     // shift earlier gap-sorted elements up until
    //     // the correct location for a[i] is found
    //     let j;
    //     for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
    //       arr[j] = arr[j - gap];

    //     // put temp (the original a[i]) in its correct
    //     // location
    //     arr[j] = temp;
    //   }
    // }
    // return arr;

    const array = list.getAll();
    let array_length = array.length;
    // let head_pointer = this.head;

    console.log('LN', array_length);

    for (
      let gap = Math.floor(array_length / 2);
      gap > 0;
      gap = Math.floor(gap / 2)
    ) {
      console.log('****************************ITERATOR', gap);

      for (let position = gap; position < array_length; position += 1) {
        let curr_picked = { ...this.getNode(position) };
        // let curr_picked = this.getNode(position);
        // const node = this.getNode(position);

        console.log('+++++CURR', position);

        if (!curr_picked) continue;

        // DEV
        // let leaped_picked = this.getNode(position - gap);

        // if (!curr_picked || !leaped_picked) continue;

        // if (curr_picked?.value < leaped_picked?.value) {
        //   // const swapped_node = this.swap(curr_picked, leaped_picked);
        //   // head_pointer = swapped_node;

        //   this.swap(curr_picked, leaped_picked);
        // }
        // END

        // DEV1
        // let back_leap;
        // let back_leap_picked;
        // for (back_leap = position; back_leap >= gap; back_leap -= gap) {
        //   back_leap_picked = this.getNode(back_leap - gap);
        //   // console.log('back_leap - gap', back_leap, gap)
        //   console.log('EXECUTE', back_leap, gap);

        //   // if(!back_leap_picked) continue

        //   console.log('EVAL', back_leap_picked?.value, curr_picked?.value);

        //   //@ts-ignore
        //   if (back_leap_picked?.value > curr_picked?.value) {
        //     console.log('swapping', back_leap, gap);

        //     //@ts-ignore
        //     this.swap(curr_picked, back_leap_picked);
        //   }
        // }
        //xsds
        // arr[j] = arr[j - gap];

        //@ts-ignore
        // this.swap(back_leap_picked, curr_picked);
        console.log('VALUES', this.getAll());
        // END1

        // TEST
        let counter = position;
        let back_leap_picked;
        do {
          back_leap_picked = this.getNode(counter - gap);

          //@ts-ignore
          if (back_leap_picked?.value > curr_picked?.value) {
            console.log('swapping', counter, gap);

            //@ts-ignore
            this.swap(curr_picked, back_leap_picked);
          }

          counter -= gap
        } while (counter >= gap);

        const test = this.getNode(counter);
        //@ts-ignore
        this.swap(test, curr_picked)
        // END
      }

      // const orig_node
    }

    return this;
  }

  shellSortOrg() {
    let arr = list.getAll();
    const n = arr.length;

    // const tgap = Math.floor(n / 2);
    // console.log('Floor', tgap, n / 2, tgap / 2);

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      console.log('***********GAP', gap);

      // Do a gapped insertion sort for this gap size.
      // The first gap elements a[0..gap-1] are already
      // in gapped order keep adding one more element
      // until the entire array is gap sorted
      for (let i = gap; i < n; i += 1) {
        console.log('++CURR', i);

        // add a[i] to the elements that have been gap
        // sorted save a[i] in temp and make a hole at
        // position i
        let temp = arr[i];

        // shift earlier gap-sorted elements up until
        // the correct location for a[i] is found
        /**
         * 4 , 2 true , 4-2
         * 2, 2 true, 2 - 2
         */
        let j;
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          console.log('swapping', j, gap);
          arr[j] = arr[j - gap];
        }

        // put temp (the original a[i]) in its correct
        // location
        arr[j] = temp;

        console.log('VALUES', arr);
      }
    }
    return arr;
  }
}

const list = new LinkedList<number>();
list.push(50);
list.push(10);
list.push(40);
list.push(20);
list.push(30);

console.log(`Items`, list.getAll());
// console.log(`Sorted Items`, list.sort().head);
// console.log(`Insertion Sorted Items`, list.insertionSort().getAll());
console.log(`Shell Sorted Items`, list.shellSort().getAll());
// console.log(`Shell Sorted Orig Items`, list.shellSortOrg());
