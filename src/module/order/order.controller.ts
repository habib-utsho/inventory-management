import { Request, Response } from "express";
import {
  getAllOrders,
  insertOrderToDb,
} from "./order.service";

const insertOrderController = async (req: Request, res: Response) => {
  const order = req.body;
  try {
    const result = await insertOrderToDb(order);
    if (result) {
      res.status(200).send({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    } else {
        res.status(400).send({
          success: false,
          message: "Order not created!",
          result,
        });
      }
  } catch (e: any) {
    res.status(400).send({
      success: false,
      message: e.message || "Something is wrong",
      error: e,
    });
  }
};
const getAllOrdersController = async (req: Request, res: Response) => {
  const { email } = req.query;
  try {
    const result = await getAllOrders(email as string);
    if (email && result) {
      res.status(200).send({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      res.status(200).send({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (e: any) {
    res.status(400).send({
      success: false,
      message: e.message || "Something is wrong",
      error: e,
    });
  }
};
export { insertOrderController, getAllOrdersController };
