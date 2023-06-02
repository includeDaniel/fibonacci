"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fibonacci = function (n, prev, error) {
    var _a;
    if (prev === void 0) { prev = new Map(); }
    if (error === void 0) { error = 'only accepts positive values'; }
    if (n < 0)
        throw new Error(error);
    if (prev.has(n))
        return (_a = prev.get(n)) !== null && _a !== void 0 ? _a : -1;
    if (n === 0) {
        prev.set(n, 0);
        return 0;
    }
    if (n <= 2 && n > 0) {
        prev.set(n, 1);
        return 1;
    }
    var next = fibonacci(n - 1, prev) + fibonacci(n - 2, prev);
    prev.set(n, next);
    return next;
};
exports.default = fibonacci;
