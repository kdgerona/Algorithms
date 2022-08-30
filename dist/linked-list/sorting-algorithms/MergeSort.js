"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractLinkedList_1 = __importDefault(require("../AbstractLinkedList"));
// import ListNode from '../ListNode';
const LinkedList_1 = __importDefault(require("../LinkedList"));
class MergeSort extends AbstractLinkedList_1.default {
    constructor() {
        super();
    }
    merge() {
        var _a;
        const count = (_a = this.pointer) === null || _a === void 0 ? void 0 : _a.getAll();
        // const count = this.getAll();
        console.log('count', count);
    }
    mergeSort() { }
    sort() {
        this.pointer = new LinkedList_1.default(this.head);
        this.left_list = new LinkedList_1.default();
        this.right_list = new LinkedList_1.default();
        let count;
        // while(this.pointer.){
        // }
        return this;
    }
}
exports.default = MergeSort;
