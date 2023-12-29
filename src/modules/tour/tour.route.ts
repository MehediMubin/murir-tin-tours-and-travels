import { Router } from "express";
import { TourController } from "./tour.controller";

const router = Router();

router.post("/create-tour", TourController.createTour);

router.get("/", TourController.getAllTours);

router.get("/:id", TourController.getSingleTour);

router.patch("/:id", TourController.updateTour);

router.delete("/:id", TourController.deleteTour);

export const TourRoutes = router;
