import { Request, Response } from "express";
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

const getAllUsers = async (req: Request, res: Response) => {
   try {
      const result = await UserService.getAllUsers();
      res.status(200).json({
         success: true,
         message: "All users fetched successfully",
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

const getSingleUser = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await UserService.getSingleUser(id);
      res.status(200).json({
         success: true,
         message: "Single user fetched successfully",
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

const updateUser = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const userData = req.body;
      const result = await UserService.updateUser(id, userData);
      res.status(200).json({
         success: true,
         message: "User updated successfully",
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

const deleteUser = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await UserService.deleteUser(id);
      res.status(200).json({
         success: true,
         message: "User deleted successfully",
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
   getAllUsers,
   getSingleUser,
   updateUser,
   deleteUser,
};
