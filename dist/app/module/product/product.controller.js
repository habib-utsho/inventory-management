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
exports.deleteAllProductsController = exports.deleteProductByIdController = exports.updateProductByIdController = exports.getSingleProductByIdController = exports.insertProductController = exports.getAllProductsController = void 0;
const product_service_1 = require("./product.service");
const product_validate_1 = require("./product.validate");
const getAllProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, product_service_1.getAllProducts)();
        if (data) {
            res.status(200).send({
                success: true,
                message: 'Products fetched successfully!',
                data,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: 'Products not found!',
                data,
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
exports.getAllProductsController = getAllProductsController;
const insertProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = req.body;
    try {
        const zodProductValidateSchema = (0, product_validate_1.validateProduct)(product);
        const data = yield (0, product_service_1.insertProductToDb)(zodProductValidateSchema);
        console.log(data);
        if (data) {
            res.status(200).send({
                success: true,
                message: 'Product created successfully!',
                data,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: 'Product not created!',
                data,
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
exports.insertProductController = insertProductController;
const getSingleProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const data = yield (0, product_service_1.getProductById)(productId);
        if (data) {
            res.status(200).send({
                success: true,
                message: 'Product fetched successfully!',
                data,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: 'Product not found!',
                data,
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
exports.getSingleProductByIdController = getSingleProductByIdController;
const updateProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const product = req.body;
    try {
        const data = yield (0, product_service_1.updateProductById)(productId, product);
        if (data) {
            res.status(200).send({
                success: true,
                message: 'Product updated successfully!',
                data,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: 'Product not found to update!',
                data,
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
exports.updateProductByIdController = updateProductByIdController;
const deleteProductByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const data = yield (0, product_service_1.deleteProductById)(productId);
        if (data) {
            res.status(200).send({
                success: true,
                message: 'Product deleted successfully!',
                data,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: 'Product not found to delete!',
                data,
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
exports.deleteProductByIdController = deleteProductByIdController;
const deleteAllProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, product_service_1.deleteAllProducts)();
        if (data) {
            res.status(200).send({
                success: true,
                message: 'All products are deleted successfully!',
                data,
            });
        }
        else {
            res.status(400).send({
                success: false,
                message: 'Products not found to delete!',
                data,
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
exports.deleteAllProductsController = deleteAllProductsController;
