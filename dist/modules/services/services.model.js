"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const services = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    includedServices: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
exports.Services = mongoose_1.default.model('service', services);
