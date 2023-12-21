import cors from "cors";
import express, { Application, Request, Response } from "express";
import { userRoutes } from "./modules/user/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
   res.status(200).json({
      message: "Welcome to Murir Tin Tours & Travels",
      data: "apatoto nai!",
   });
});

export default app;
