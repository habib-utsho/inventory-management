"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const errHandler_1 = require("./app/middleware/errHandler");
const order_route_1 = require("./app/module/order/order.route");
const product_route_1 = require("./app/module/product/product.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Router
app.use('/api/orders', order_route_1.orderRouter);
app.use('/api/products', product_route_1.productRouter);
// Demo homepage
app.get('/', (req, res) => {
    res.status(200).send('Inventory management homepage');
});
// Error handler middleware
app.use(errHandler_1.notFound);
app.use(errHandler_1.errorHandler);
exports.default = app;
