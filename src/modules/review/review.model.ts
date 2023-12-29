import { Schema, model } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>({
   review: {
      type: String,
      required: [true, "Please tell us your review!"],
   },
   rating: {
      type: Number,
      required: [true, "Please provide a rating for the tour"],
   },
   createdAt: {
      type: Date,
      default: Date.now(),
   },
   tour: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: [true, "Please provide a tour for the review"],
   },
   user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user for the review"],
   },
});

export const ReviewModel = model<IReview>("Review", reviewSchema);
