"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("../LinkedList"));
class ShellSort extends LinkedList_1.default {
    sort() {
        const array = this.getAll();
        let array_length = array.length;
        const gap_size = 2;
        for (let gap = Math.floor(array_length / gap_size); gap > 0; gap = Math.floor(gap / gap_size)) {
            for (let position = gap; position < array_length; position += 1) {
                let curr_picked = this.getNode(position);
                // const cloned_curr_picked = { ...this.getNode(position) };
                let reverse_pointer = this.getNode(position - gap);
                do {
                    //@ts-ignore
                    if ((curr_picked === null || curr_picked === void 0 ? void 0 : curr_picked.value) < reverse_pointer.value) {
                        //@ts-ignore
                        this.swap(curr_picked, reverse_pointer);
                        curr_picked = reverse_pointer;
                        continue;
                    }
                    //@ts-ignore
                    reverse_pointer = reverse_pointer.left;
                } while (reverse_pointer !== null);
            }
        }
        return this;
    }
}
exports.default = ShellSort;
