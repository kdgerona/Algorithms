"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const ShellSort_1 = __importDefault(require("./linked-list/sorting-algorithms/ShellSort"));
// const list = new BubbleSort<number>();
// const list = new InsertionSort<number>();
const list = new ShellSort_1.default();
// const list = new MergeSort<number>();
// * Binary Tree
// const list = new BinaryTree<number>()
(0, utils_1.generateRandomListValues)(list, 1000);
console.log(`Sorted Items`);
list.sort().map(utils_1.handleLog);
// list.sort();
// list.traverse()
