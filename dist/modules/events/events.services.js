"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventServices = void 0;
const appError_1 = require("../../middleware/appError");
const events_model_1 = require("./events.model");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createEventService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield events_model_1.Event.create(payload);
    if (!result) {
        throw new appError_1.AppError(http_status_codes_1.default.NOT_FOUND, "somethig went wrong!");
    }
    return result;
});
const getEventService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield events_model_1.Event.find({});
    if (!result) {
        throw new appError_1.AppError(http_status_codes_1.default.NOT_FOUND, "somethig went wrong!");
    }
    return result;
});
const updateEventService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield events_model_1.Event.findOneAndUpdate({ _id: id }, payload);
    if (!result) {
        throw new appError_1.AppError(http_status_codes_1.default.NOT_FOUND, "somethig went wrong!");
    }
    return result;
});
const deleteEventService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield events_model_1.Event.deleteOne({ _id: id });
    if (!result) {
        throw new appError_1.AppError(http_status_codes_1.default.NOT_FOUND, "somethig went wrong!");
    }
    return result;
});
exports.eventServices = {
    createEventService,
    getEventService,
    updateEventService,
    deleteEventService
};
