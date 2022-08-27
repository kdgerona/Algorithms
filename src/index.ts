import { generateRandomListValues, handleLog } from './utils';
import BubbleSort from './linked-list/sorting-algorithms/BubbleSort';
import InsertionSort from './linked-list/sorting-algorithms/InsertionSort';
import ShellSort from './linked-list/sorting-algorithms/ShellSort';
import MergeSort from './linked-list/sorting-algorithms/MergeSort';

// const list = new BubbleSort<number>();
// const list = new InsertionSort<number>();
// const list = new ShellSort<number>();
const list = new MergeSort<number>();

generateRandomListValues(list, 1000);

console.log(`Sorted Items`);
// list.sort().map(handleLog);
list.sort();
