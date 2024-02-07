"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const eventSchema = new mongoose_1.default.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventId: {
        type: String,
        required: true,
        unique: true
    },
    eventImage: {
        type: String,
        required: true
    }
});
// Create a model from the schema
exports.Event = mongoose_1.default.model('Event', eventSchema);
