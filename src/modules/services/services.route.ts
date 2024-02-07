import { Router } from "express";
import { eventServiceController } from "./services.controller";

const router = Router();

router.post("/services", eventServiceController.createEventServiceController);
router.get("/services", eventServiceController.getEventServiceController);

router.put(
  "/services/:id",
  eventServiceController.updateEventServiceController
);
router.delete(
  "/services/:id",
  eventServiceController.deleteEventServiceController
);

export const EventServices = router;
