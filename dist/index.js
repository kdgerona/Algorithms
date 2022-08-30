"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const BinaryTree_1 = __importDefault(require("./binary-tree/BinaryTree"));
// const list = new BubbleSort<number>();
// const list = new InsertionSort<number>();
// const list = new ShellSort<number>();
// const list = new MergeSort<number>();
const list = new BinaryTree_1.default();
(0, utils_1.generateRandomListValues)(list, 1000);
console.log(`Sorted Items`);
// list.sort().map(handleLog);
// list.sort();
list.traverse();
