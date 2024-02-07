import { Request, Response } from "express";
import { asyncOperation } from "../../utils/asyncOperation";
import { recentEventServices } from "./recentEvents.services";
import response from "../../utils/response";
import httpStatusCode from "http-status-codes";

const createRecentEventController = asyncOperation(
  async (req: Request, res: Response) => {
    const result = await recentEventServices.createRecentEventServices(
      req.body
    );
    response(res, {
      success: true,
      message: "event create successfully",
      statusCode: httpStatusCode.OK,
      data: result,
    });
  }
);

const getRecentEventController = asyncOperation(
  async (req: Request, res: Response) => {
    const result = await recentEventServices.getRecentEventsServices();
    response(res, {
      success: true,
      message: "event get successfull.",
      statusCode: httpStatusCode.OK,
      data: result,
    });
  }
);

const updateRecentEventController = asyncOperation(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body.data;
    const result = await recentEventServices.updateRecentEventsServices(id, data);
    response(res, {
      success: true,
      message: "event update successfull.",
      statusCode: httpStatusCode.OK,
      data: result,
    });
  }
);

const deleteRecentEventsController=asyncOperation(async(req:Request,res:Response)=>{
  const {id}=req.params;
  const result = await recentEventServices.deleteRecentEvents(id);
  response(res, {
    success: true,
    message: "event delete successfull.",
    statusCode: httpStatusCode.OK,
    data: result,
  });
})
export const recentEventController = {
  createRecentEventController,
  getRecentEventController,
  updateRecentEventController,
  deleteRecentEventsController
};
