"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LeafNode_1 = __importDefault(require("./LeafNode"));
class BinaryTree {
    constructor() {
        this.root = null;
    }
    push(value) {
        if (!this.root) {
            this.root = new LeafNode_1.default(value);
            return;
        }
        this.setter(this.root, value);
    }
    hasNode(node) {
        return !!node;
    }
    setter(node, value) {
        if (!node)
            return;
        // Set to right leaf
        if (node.value >= value) {
            if (node.right) {
                this.setter(node === null || node === void 0 ? void 0 : node.right, value);
                return;
            }
            node.right = new LeafNode_1.default(value);
        }
        else {
            // Set to left leaf
            if (node.left) {
                this.setter(node === null || node === void 0 ? void 0 : node.left, value);
                return;
            }
            node.left = new LeafNode_1.default(value);
        }
    }
    // Left, Root, Right
    inOrder(node) {
        if (!node)
            return;
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }
    // Root, Left, Right
    preOrder(node) {
        if (!node)
            return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    // Left, Right, Root
    postOrder(node) {
        if (!node)
            return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }
    traverse() {
        this.inOrder(this.root);
        // this.preOrder(this.root)
        // this.postOrder(this.root)
    }
}
exports.default = BinaryTree;
