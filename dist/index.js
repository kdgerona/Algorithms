"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const MergeSort_1 = __importDefault(require("./linked-list/sorting-algorithms/MergeSort"));
// const list = new BubbleSort<number>();
// const list = new InsertionSort<number>();
// const list = new ShellSort<number>();
const list = new MergeSort_1.default();
(0, utils_1.generateRandomListValues)(list, 1000);
console.log(`Sorted Items`);
// list.sort().map(handleLog);
list.sort();
