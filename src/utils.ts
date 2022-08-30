import LinkedList from './linked-list/LinkedList';
import BinaryTree from './binary-tree/BinaryTree';

export const generateRandomListValues = (list: LinkedList | BinaryTree, n: number) => {
  for (let x = 0; x <= n; x++) {
    const random_number = Math.floor(Math.random() * n);
    list.push(random_number);
  }
};

export const handleLog = (item: number) => console.log(item);
