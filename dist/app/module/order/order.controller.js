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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrdersController = exports.insertOrderController = void 0;
const order_service_1 = require("./order.service");
const insertOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = req.body;
    try {
        const result = yield (0, order_service_1.insertOrderToDb)(order);
        if (result) {
            res.status(200).send({
                success: true,
                message: 'Order created successfully!',
                data: result,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: 'Order not created!',
                result,
            });
        }
    }
    catch (e) {
        res.status(400).send({
            success: false,
            message: e.message || 'Something is wrong',
            error: e,
        });
    }
});
exports.insertOrderController = insertOrderController;
const getAllOrdersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    try {
        const result = yield (0, order_service_1.getAllOrders)(email);
        if (email && result) {
            res.status(200).send({
                success: true,
                message: 'Orders fetched successfully for user email!',
                data: result,
            });
        }
        else {
            res.status(200).send({
                success: true,
                message: 'Orders fetched successfully!',
                data: result,
            });
        }
    }
    catch (e) {
        res.status(400).send({
            success: false,
            message: e.message || 'Something is wrong',
            error: e,
        });
    }
});
exports.getAllOrdersController = getAllOrdersController;
