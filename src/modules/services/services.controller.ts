import { Request, Response } from "express";
import { asyncOperation } from "../../utils/asyncOperation";
import response from "../../utils/response";
import httpStatusCode from "http-status-codes";
import { eventServicesService } from "./eventServices.services";

const createEventServiceController = asyncOperation(
  async (req: Request, res: Response) => {
    const result = await eventServicesService.createEventServiceSevices(
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

const getEventServiceController = asyncOperation(
  async (req: Request, res: Response) => {
    const result = await eventServicesService.getEventServiceSevices();
    response(res, {
      success: true,
      message: "event get successfull.",
      statusCode: httpStatusCode.OK,
      data: result,
    });
  }
);

const updateEventServiceController = asyncOperation(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const result = await eventServicesService.updateEventServiceServices(
      id,
      data
    );
    response(res, {
      success: true,
      message: "service update successfull.",
      statusCode: httpStatusCode.OK,
      data: result,
    });
  }
);

const deleteEventServiceController = asyncOperation(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await eventServicesService.deleteEventServiceServices(id);
    response(res, {
      success: true,
      message: "event delete successfull.",
      statusCode: httpStatusCode.OK,
      data: result,
    });
  }
);
export const eventServiceController = {
  createEventServiceController,
  getEventServiceController,
  updateEventServiceController,
  deleteEventServiceController,
};
