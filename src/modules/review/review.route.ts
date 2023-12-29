import { Router } from "express";
import { ReviewController } from "./review.controller";

const router = Router();

router.post("/create-review", ReviewController.createReview);

router.get("/", ReviewController.getAllReviews);

router.get("/:id", ReviewController.getSingleReview);

router.patch("/:id", ReviewController.updateReview);

router.delete("/:id", ReviewController.deleteReview);

export const ReviewRoutes = router;
