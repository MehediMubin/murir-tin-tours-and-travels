/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { TourService } from "./tour.service";

const createTour = async (req: Request, res: Response) => {
   try {
      const result = await TourService.createTour(req.body);
      res.status(201).json({
         success: true,
         message: "Tour created successfully",
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

const getAllTours = async (req: Request, res: Response) => {
   try {
      const result = await TourService.getAllTours();
      res.status(200).json({
         success: true,
         message: "All tours fetched successfully",
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

const getSingleTour = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await TourService.getSingleTour(id);
      res.status(200).json({
         success: true,
         message: "Single tour fetched successfully",
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

const updateTour = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await TourService.updateTour(id, req.body);
      res.status(200).json({
         success: true,
         message: "Tour updated successfully",
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

const deleteTour = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await TourService.deleteTour(id);
      res.status(200).json({
         success: true,
         message: "Tour deleted successfully",
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

export const TourController = {
   createTour,
   getAllTours,
   getSingleTour,
   updateTour,
   deleteTour,
};
