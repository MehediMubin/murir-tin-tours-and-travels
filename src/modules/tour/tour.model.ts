import { Schema, model } from "mongoose";
import { ITour } from "./tour.interface";

const tourSchema = new Schema<ITour>({
   name: {
      type: String,
      required: [true, "A tour must have a name"],
      unique: true,
   },
   durationHours: {
      type: Number,
      required: [true, "A tour must have a duration"],
   },
   ratingAverage: {
      type: Number,
      default: 4.5,
   },
   ratingQuantity: {
      type: Number,
      default: 0,
   },
   price: {
      type: Number,
      required: [true, "A tour must have a price"],
   },
   imageCover: {
      type: String,
      required: [true, "A tour must have a cover image"],
   },
   images: [String],
   createdAt: {
      type: Date,
      default: Date.now(),
   },
   startDates: [Date],
   startLocation: {
      type: String,
      required: [true, "A tour must have a start location"],
   },
   locations: [String],
   slug: String,
});

export const TourModel = model<ITour>("Tour", tourSchema);
