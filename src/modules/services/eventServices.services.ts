import { AppError } from "../../middleware/appError";
import httpStatusCode from "http-status-codes";
import { Services } from "./services.model";
import { IServices } from "./services.interface";

const createEventServiceSevices = async (payload: IServices) => {
  const result = await Services.create(payload);

  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};

const getEventServiceSevices = async () => {
  const result = await Services.find({});
  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};

const updateEventServiceServices = async (
  id: string,
  payload: Partial<IServices>
) => {
  const result = await Services.findByIdAndUpdate({ _id: id }, payload);
  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};
const deleteEventServiceServices = async (id: string) => {
  const result = await Services.findByIdAndDelete({ _id: id });
  if (!result) {
    throw new AppError(httpStatusCode.NOT_FOUND, "somethig went wrong!");
  }
  return result;
};

export const eventServicesService = {
  createEventServiceSevices,
  getEventServiceSevices,
  updateEventServiceServices,
  deleteEventServiceServices,
};
