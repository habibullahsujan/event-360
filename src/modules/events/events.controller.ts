import { Request, Response } from "express";
import { asyncOperation } from "../../utils/asyncOperation";
import { eventServices } from "./events.services";
import response from "../../utils/response";
import httpStatusCode from "http-status-codes";

const createEventController = asyncOperation(
  async (req: Request, res: Response) => {
    const result = await eventServices.createEventService(req.body);
    response(res, {
      success: true,
      message: "event create successfully",
      statusCode: httpStatusCode.OK,
      data: result,
    });
  }
);

const getEventController = asyncOperation(
  async (req: Request, res: Response) => {
    const result = await eventServices.getEventService();
    response(res, {
      success: true,
      message: "event get successfull.",
      statusCode: httpStatusCode.OK,
      data: result,
    });
  }
);

const updateEventController = asyncOperation(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body.data;
    const result = await eventServices.updateEventService(id, data);
    response(res, {
      success: true,
      message: "event update successfull.",
      statusCode: httpStatusCode.OK,
      data: result,
    });
  }
);

const deleteEventController=asyncOperation(async(req:Request,res:Response)=>{
  const {id}=req.params;
  const result = await eventServices.deleteEventService(id);
  response(res, {
    success: true,
    message: "event delete successfull.",
    statusCode: httpStatusCode.OK,
    data: result,
  });
})

export const eventController = {
  createEventController,
  getEventController,
  updateEventController,
  deleteEventController
};
