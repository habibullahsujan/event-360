"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const eventSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    }
});
// Create a model from the schema
exports.Event = mongoose_1.default.model('Event', eventSchema);
