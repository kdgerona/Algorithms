"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractLinkedList {
    constructor() {
        this.head = null;
    }
    push(value) {
        const node = {
            value,
            left: null,
            right: null,
        };
        if (this.head == null) {
            this.head = node;
            return value;
        }
        let curr = this.head;
        while (curr.right != null) {
            curr = curr.right;
        }
        node.left = curr;
        curr.right = node;
        return value;
    }
    pop() {
        if (this.head == null)
            return null;
        let cur = this.head;
        while (cur.right != null) {
            cur = cur.right;
        }
        let curValue = cur.value;
        if (cur.left === this.head) {
            this.head = null;
        }
        else {
            cur.left.right = null;
        }
        return curValue;
    }
    shift() {
        if (this.head === null)
            return null;
        let headValue = this.head.value;
        if (this.head.right === null) {
            this.head = null;
        }
        else {
            this.head.right.left = null;
            this.head = this.head.right;
        }
        return headValue;
    }
    getAll() {
        if (this.head == null)
            return [];
        if (this.head.right === null)
            return [this.head.value];
        let values = [];
        let cur = this.head;
        while (cur != null) {
            values.push(cur.value);
            cur = cur.right;
        }
        return values;
    }
    get(index) {
        if (!this.head)
            return null;
        // if(index == 0 )
        let count = 0;
        let cur = this.head;
        let value = null;
        while (count <= index && cur != null) {
            value = cur.value;
            count++;
            //@ts-ignore
            cur = cur.right;
        }
        return value;
    }
    remove(index) {
        if (!this.head)
            return;
        // if(index == 0 )
        let count = 0;
        let cur = this.head;
        while (count != index && cur != null) {
            count++;
            //@ts-ignore
            cur = cur.right;
        }
        if (cur === this.head) {
            this.head = null;
            return;
        }
        if (cur != null) {
            const { left, right } = cur;
            cur.left.right = right;
            cur.right.left = left;
        }
    }
    splice(value, index = 0) {
        if (index < 0)
            return null;
        if (this.head == null && index > 0)
            return null;
        if (this.head == null && index == 0)
            return this.push(value);
        let count = 0;
        let cur = this.head;
        while (count != index && cur != null) {
            cur = cur === null || cur === void 0 ? void 0 : cur.right;
            count++;
        }
        if (count != index) {
            return null;
        }
        else {
            const node = {
                left: cur.left,
                right: cur,
                value,
            };
            cur.left.right = node;
        }
        return value;
    }
    map(fn) {
        if (this.head === null)
            return [];
        const results = [];
        let cur = this.head;
        while (cur != null) {
            results.push(fn(cur.value));
            cur = cur.right;
        }
        return results;
    }
    forEach(fn) {
        if (this.head === null)
            return;
        let cur = this.head;
        while (cur != null) {
            fn(cur);
            cur = cur.right;
        }
        return;
    }
    swap(anode, bnode) {
        const clonedNode = Object.assign({}, anode);
        anode.value = bnode.value;
        bnode.value = clonedNode.value;
        return anode;
    }
    getNode(index) {
        if (!this.head)
            return null;
        // if(index == 0 )
        let count = 0;
        let cur = this.head;
        let node = null;
        while (count <= index && cur != null) {
            node = cur;
            count++;
            //@ts-ignore
            cur = cur.right;
        }
        return node;
    }
}
exports.default = AbstractLinkedList;
