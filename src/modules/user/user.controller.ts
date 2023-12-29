import { Request, Response } from "express";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
   try {
      const userData = req.body;
      const result = await UserService.createUser(userData);
      res.status(201).json({
         success: true,
         message: "User created successfully",
         data: result,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (error: any) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message || "Internal server error",
      });
   }
};

export const UserController = {
   createUser,
};
