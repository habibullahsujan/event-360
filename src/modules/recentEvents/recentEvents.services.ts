import { AppError } from "../../middleware/appError";
import { IRecentEvents } from "./recentEvents.interface";
import { RecentEvents } from "./recentEvents.model";

import httpStatusCode from "http-status-codes";

const createRecentEventServices = async (payload: IRecentEvents) => {
  const result = await RecentEvents.create(payload);

  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};

const getRecentEventsServices = async () => {
  const result = await RecentEvents.find({});
  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};
const updateRecentEventsServices = async (id: string, payload: Partial<IRecentEvents>) => {
  const result = await RecentEvents.findByIdAndUpdate({ _id: id }, payload);
  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};
const deleteRecentEvents = async (id: string) => {
  const result = await RecentEvents.deleteOne({_id:id});
  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};

export const recentEventServices = {
  createRecentEventServices,
  getRecentEventsServices,
  updateRecentEventsServices,
  deleteRecentEvents
};
