import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { orderRouter } from "../module/order/order.route";
import { productRouter } from "../module/product/product.route";
import { errorHandler, notFound } from "../middleware/errHandler";
dotenv.config();
const app:Application = express();

// parser
app.use(express.json())
app.use(cors())


// Router
app.use('/api/orders', orderRouter)
app.use('/api/products', productRouter)


// Demo homepage
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Homepage");
});

// Error handler middleware
app.use(notFound);
app.use(errorHandler);


export default app