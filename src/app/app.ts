import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { orderRouter } from "../module/order/order.route";
dotenv.config();
const app:Application = express();

// parser
app.use(express.json())
app.use(cors())


// Router
app.use('/api/order', orderRouter)
app.use('/api/products', orderRouter)

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Success");
});


export default app