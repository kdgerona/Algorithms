"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./LinkedList"));
class ExtendedLinkedList extends LinkedList_1.default {
    constructor(head) {
        super();
        this.head = head || null;
    }
    sort() {
        return this;
    }
}
exports.default = ExtendedLinkedList;
