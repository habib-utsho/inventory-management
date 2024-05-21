import {  Router } from "express";
import { getAllOrderController } from "./order.controller";

const router =  Router()

router.get('/', getAllOrderController)

export {router as orderRouter}