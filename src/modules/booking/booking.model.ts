import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>({
   user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Booking must belong to a user"],
   },
   tour: {
      type: Schema.Types.ObjectId,
      ref: "Tour",
      required: [true, "Booking must belong to a tour"],
   },
});

export const BookingModel = model<IBooking>("Booking", bookingSchema);
