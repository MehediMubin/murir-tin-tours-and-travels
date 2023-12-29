import cors from "cors";
import express, { Application, Request, Response } from "express";
import { BookingRoutes } from "./modules/booking/booking.route";
import { ReviewRoutes } from "./modules/review/review.route";
import { TourRoutes } from "./modules/tour/tour.route";
import { userRoutes } from "./modules/user/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tours", TourRoutes);
app.use("/api/v1/reviews", ReviewRoutes);
app.use("/api/v1/bookings", BookingRoutes);

app.get("/", (req: Request, res: Response) => {
   res.status(200).json({
      message: "Welcome to Murir Tin Tours & Travels",
      data: "apatoto nai!",
   });
});

export default app;
