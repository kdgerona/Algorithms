"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractLinkedList_1 = __importDefault(require("./AbstractLinkedList"));
class LinkedList extends AbstractLinkedList_1.default {
    constructor(head) {
        super();
        this.head = head || null;
    }
    sort() {
        return this;
    }
}
exports.default = LinkedList;
