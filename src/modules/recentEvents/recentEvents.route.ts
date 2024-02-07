import { Router } from "express";
import { recentEventController } from "./recentEvents.controller";

const router = Router();

router.post(
  "/recent-events",
  recentEventController.createRecentEventController
);
router.get("/recent-events", recentEventController.getRecentEventController);
router.put(
  "/recent-events/:id",
  recentEventController.updateRecentEventController
);
router.delete(
  "/recent-events/:id",
  recentEventController.deleteRecentEventsController
);

export const RecentEventRouter = router;
