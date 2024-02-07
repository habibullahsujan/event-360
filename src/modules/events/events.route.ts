import { Router } from "express";

import { eventController } from "./events.controller";

const router = Router();

router.get("/events", eventController.getEventController);
router.post("/events", eventController.createEventController);
router.put('/events/:id',eventController.updateEventController)
router.delete('/events/:id',eventController.deleteEventController)

export const EventsRouter = router;
