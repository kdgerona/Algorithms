"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BubbleSort_1 = __importDefault(require("../sorting-algorithms/BubbleSort"));
class InsertionSort extends BubbleSort_1.default {
    sort() {
        if (this.head === null)
            return this;
        const sorted_list = new BubbleSort_1.default();
        let head_pointer = this.head;
        do {
            const next_pointer = head_pointer === null || head_pointer === void 0 ? void 0 : head_pointer.right;
            if (!next_pointer) {
                sorted_list.push(head_pointer.value);
                sorted_list.sort();
                this.head = sorted_list.head;
                break;
            }
            if (head_pointer.value > (next_pointer === null || next_pointer === void 0 ? void 0 : next_pointer.value)) {
                const swapped_node = this.swap(head_pointer, next_pointer);
                sorted_list.push(swapped_node.value);
                head_pointer = swapped_node.right;
            }
            else {
                sorted_list.push(head_pointer.value);
                head_pointer = next_pointer;
            }
            sorted_list.sort();
        } while (head_pointer !== null);
        return this;
    }
    // Reverse Insert Sort
    reverseSort(node) {
        if (node === null)
            return node;
        const sorted_list = new BubbleSort_1.default();
        let head_pointer = node;
        do {
            const next_pointer = head_pointer === null || head_pointer === void 0 ? void 0 : head_pointer.left;
            if (!next_pointer) {
                sorted_list.push(head_pointer.value);
                sorted_list.sort();
                this.head = sorted_list.head;
                break;
            }
            if (head_pointer.value > (next_pointer === null || next_pointer === void 0 ? void 0 : next_pointer.value)) {
                const swapped_node = this.swap(head_pointer, next_pointer);
                sorted_list.push(swapped_node.value);
                head_pointer = swapped_node.left;
            }
            else {
                sorted_list.push(head_pointer.value);
                head_pointer = next_pointer;
            }
            sorted_list.sort();
        } while (head_pointer !== null);
        return this;
    }
}
exports.default = InsertionSort;
