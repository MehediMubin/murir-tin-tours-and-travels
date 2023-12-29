import { IBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";

const createBooking = async (bookingData: IBooking): Promise<IBooking> => {
   const result = await BookingModel.create(bookingData);
   return result;
};

const getAllBookings = async (): Promise<IBooking[]> => {
   const result = await BookingModel.find();
   return result;
};

const getSingleBooking = async (id: string): Promise<IBooking | null> => {
   const result = await BookingModel.findById(id);
   return result;
};

const updateBooking = async (
   id: string,
   bookingData: IBooking,
): Promise<IBooking | null> => {
   const result = await BookingModel.findByIdAndUpdate(id, bookingData, {
      new: true,
      runValidators: true,
   });
   return result;
};

const deleteBooking = async (id: string): Promise<IBooking | null> => {
   const result = await BookingModel.findByIdAndDelete(id);
   return result;
};

export const BookingService = {
   createBooking,
   getAllBookings,
   getSingleBooking,
   updateBooking,
   deleteBooking,
};
