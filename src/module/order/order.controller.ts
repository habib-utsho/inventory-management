import { Request, Response } from "express"

const getAllOrderController = (req:Request, res:Response)=> {
    res.status(200).send({success: true, message: "All orders are retrieved successfully!"})
}

export {getAllOrderController}