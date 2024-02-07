import { AppError } from "../../middleware/appError";
import { IEventData } from "./events.interface";
import { Event } from "./events.model";
import httpStatusCode from "http-status-codes";

const createEventService = async (payload: IEventData) => {
  const result = await Event.create(payload);

  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};

const getEventService = async () => {
  const result = await Event.find({});
  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};

const updateEventService = async (id: string, payload: Partial<IEventData>) => {
  const result = await Event.findOneAndUpdate({ _id: id }, payload);
  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};
const deleteEventService = async (id: string) => {
  const result = await Event.deleteOne({_id:id});
  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};

export const eventServices = {
  createEventService,
  getEventService,
  updateEventService,
  deleteEventService
};
