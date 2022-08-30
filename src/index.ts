import { generateRandomListValues, handleLog } from './utils';
import BubbleSort from './linked-list/sorting-algorithms/BubbleSort';
import InsertionSort from './linked-list/sorting-algorithms/InsertionSort';
import ShellSort from './linked-list/sorting-algorithms/ShellSort';
import MergeSort from './linked-list/sorting-algorithms/MergeSort';
import BinaryTree from './binary-tree/BinaryTree'

// const list = new BubbleSort<number>();
// const list = new InsertionSort<number>();
const list = new ShellSort<number>();
// const list = new MergeSort<number>();

// * Binary Tree
// const list = new BinaryTree<number>()

generateRandomListValues(list, 1000);

console.log(`Sorted Items`);
list.sort().map(handleLog);
// list.sort();

// list.traverse()
