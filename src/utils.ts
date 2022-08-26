import { LinkedList } from './index';

export const generateRandomListValues = (list: LinkedList, n: number) => {
  for (let x = 0; x <= n; x++) {
    const random_number = Math.floor(Math.random() * n);
    list.push(random_number);
  }
};

export const handleLog = (item: number) => console.log(item);
