"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLog = exports.generateRandomListValues = void 0;
const generateRandomListValues = (list, n) => {
    for (let x = 0; x <= n; x++) {
        const random_number = Math.floor(Math.random() * n);
        list.push(random_number);
    }
};
exports.generateRandomListValues = generateRandomListValues;
const handleLog = (item) => console.log(item);
exports.handleLog = handleLog;
