"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("../LinkedList"));
class BubbleSort extends LinkedList_1.default {
    constructor() {
        super();
    }
    sort() {
        if (this.head === null)
            return this;
        let temp_head = this.head;
        let head_pointer = this.head;
        let should_execute_swap_operation = true;
        let swap_operation_count = 0;
        do {
            const next_pointer = head_pointer.right;
            if (!next_pointer) {
                // console.log(`Swap Operation Count - ${swap_operation_count}`);
                if (swap_operation_count !== 0) {
                    // console.log('Reevaluating...');
                    head_pointer = temp_head;
                    swap_operation_count = 0;
                    should_execute_swap_operation = true;
                    continue;
                }
                else {
                    this.head = temp_head;
                    should_execute_swap_operation = false;
                    break;
                }
            }
            // console.log(
            //   'Evaluating...',
            //   head_pointer.value,
            //   next_pointer?.value ?? null
            // );
            if (head_pointer.value > (next_pointer === null || next_pointer === void 0 ? void 0 : next_pointer.value)) {
                const swapped_node = this.swap(head_pointer, next_pointer);
                swap_operation_count += 1;
                if (!swapped_node.left)
                    temp_head = swapped_node;
                head_pointer = swapped_node.right;
            }
            else {
                head_pointer = next_pointer;
            }
        } while (head_pointer !== null && should_execute_swap_operation);
        return this;
    }
}
exports.default = BubbleSort;
