import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Murir Tin Tours & Travels",
    data: "apatoto nai!",
  });
});

export default app;
