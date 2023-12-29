/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ReviewService } from "./review.service";

const createReview = async (req: Request, res: Response) => {
   try {
      const result = await ReviewService.createReview(req.body);
      res.status(201).json({
         success: true,
         message: "Review created successfully",
         data: result,
      });
   } catch (error: any) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message || "Internal server error",
      });
   }
};

const getAllReviews = async (req: Request, res: Response) => {
   try {
      const result = await ReviewService.getAllReviews();
      res.status(200).json({
         success: true,
         message: "All reviews fetched successfully",
         data: result,
      });
   } catch (error: any) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message || "Internal server error",
      });
   }
};

const getSingleReview = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await ReviewService.getSingleReview(id);
      res.status(200).json({
         success: true,
         message: "Single review fetched successfully",
         data: result,
      });
   } catch (error: any) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message || "Internal server error",
      });
   }
};

const updateReview = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await ReviewService.updateReview(id, req.body);
      res.status(200).json({
         success: true,
         message: "Review updated successfully",
         data: result,
      });
   } catch (error: any) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message || "Internal server error",
      });
   }
};

const deleteReview = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await ReviewService.deleteReview(id);
      res.status(200).json({
         success: true,
         message: "Review deleted successfully",
         data: result,
      });
   } catch (error: any) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: error.message || "Internal server error",
      });
   }
};

export const ReviewController = {
   createReview,
   getAllReviews,
   getSingleReview,
   updateReview,
   deleteReview,
};
