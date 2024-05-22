"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
exports.orderRouter = router;
router.post('/', order_controller_1.insertOrderController);
router.get('/', order_controller_1.getAllOrdersController);
