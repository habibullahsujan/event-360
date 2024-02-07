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
exports.recentEventController = void 0;
const asyncOperation_1 = require("../../utils/asyncOperation");
const recentEvents_services_1 = require("./recentEvents.services");
const response_1 = __importDefault(require("../../utils/response"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createRecentEventController = (0, asyncOperation_1.asyncOperation)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield recentEvents_services_1.recentEventServices.createRecentEventServices(req.body);
    (0, response_1.default)(res, {
        success: true,
        message: "event create successfully",
        statusCode: http_status_codes_1.default.OK,
        data: result,
    });
}));
const getRecentEventController = (0, asyncOperation_1.asyncOperation)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield recentEvents_services_1.recentEventServices.getRecentEventsServices();
    (0, response_1.default)(res, {
        success: true,
        message: "event get successfull.",
        statusCode: http_status_codes_1.default.OK,
        data: result,
    });
}));
const updateRecentEventController = (0, asyncOperation_1.asyncOperation)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body.data;
    const result = yield recentEvents_services_1.recentEventServices.updateRecentEventsServices(id, data);
    (0, response_1.default)(res, {
        success: true,
        message: "event update successfull.",
        statusCode: http_status_codes_1.default.OK,
        data: result,
    });
}));
const deleteRecentEventsController = (0, asyncOperation_1.asyncOperation)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield recentEvents_services_1.recentEventServices.deleteRecentEvents(id);
    (0, response_1.default)(res, {
        success: true,
        message: "event delete successfull.",
        statusCode: http_status_codes_1.default.OK,
        data: result,
    });
}));
exports.recentEventController = {
    createRecentEventController,
    getRecentEventController,
    updateRecentEventController,
    deleteRecentEventsController
};
