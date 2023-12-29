/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { BookingService } from "./booking.service";

const createBooking = async (req: Request, res: Response) => {
   try {
      const result = await BookingService.createBooking(req.body);
      res.status(201).json({
         success: true,
         message: "Booking created successfully",
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

const getAllBookings = async (req: Request, res: Response) => {
   try {
      const result = await BookingService.getAllBookings();
      res.status(200).json({
         success: true,
         message: "All bookings fetched successfully",
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

const getSingleBooking = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await BookingService.getSingleBooking(id);
      res.status(200).json({
         success: true,
         message: "Single booking fetched successfully",
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

const updateBooking = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await BookingService.updateBooking(id, req.body);
      res.status(200).json({
         success: true,
         message: "Booking updated successfully",
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

const deleteBooking = async (req: Request, res: Response) => {
   try {
      const id = req.params.id;
      const result = await BookingService.deleteBooking(id);
      res.status(200).json({
         success: true,
         message: "Booking deleted successfully",
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

export const BookingController = {
   createBooking,
   getAllBookings,
   getSingleBooking,
   updateBooking,
   deleteBooking,
};
