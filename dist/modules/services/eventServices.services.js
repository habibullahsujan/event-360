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
exports.eventServicesService = void 0;
const appError_1 = require("../../middleware/appError");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const services_model_1 = require("./services.model");
const createEventServiceSevices = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_model_1.Services.create(payload);
    if (!result) {
        throw new appError_1.AppError(http_status_codes_1.default.NOT_FOUND, "somethig went wrong!");
    }
    return result;
});
const getEventServiceSevices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_model_1.Services.find({});
    if (!result) {
        throw new appError_1.AppError(http_status_codes_1.default.NOT_FOUND, "somethig went wrong!");
    }
    return result;
});
const updateEventServiceServices = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_model_1.Services.findByIdAndUpdate({ _id: id }, payload);
    if (!result) {
        throw new appError_1.AppError(http_status_codes_1.default.NOT_FOUND, "somethig went wrong!");
    }
    return result;
});
const deleteEventServiceServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_model_1.Services.findByIdAndDelete({ _id: id });
    if (!result) {
        throw new appError_1.AppError(http_status_codes_1.default.NOT_FOUND, "somethig went wrong!");
    }
    return result;
});
exports.eventServicesService = {
    createEventServiceSevices,
    getEventServiceSevices,
    updateEventServiceServices,
    deleteEventServiceServices,
};
