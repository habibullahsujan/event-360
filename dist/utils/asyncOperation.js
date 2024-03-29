"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncOperation = void 0;
const asyncOperation = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((error) => next(error));
    };
};
exports.asyncOperation = asyncOperation;
