"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("../LinkedList"));
const ExtendedLinkedList_1 = __importDefault(require("../ExtendedLinkedList"));
class MergeSort extends LinkedList_1.default {
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
        this.pointer = new ExtendedLinkedList_1.default(this.head);
        this.left_list = new ExtendedLinkedList_1.default();
        this.right_list = new ExtendedLinkedList_1.default();
        let count;
        // while(this.pointer.){
        // }
        return this;
    }
}
exports.default = MergeSort;
