import { Router } from "express";
import { BookingController } from "./booking.controller";

const router = Router();

router.post("/create-booking", BookingController.createBooking);

router.get("/", BookingController.getAllBookings);

router.get("/:id", BookingController.getSingleBooking);

router.patch("/:id", BookingController.updateBooking);

router.delete("/:id", BookingController.deleteBooking);

export const BookingRoutes = router;
