import { ITour } from "./tour.interface";
import { TourModel } from "./tour.model";

const createTour = async (tourData: ITour): Promise<ITour> => {
   const result = await TourModel.create(tourData);
   return result;
};

const getAllTours = async (): Promise<ITour[]> => {
   const result = await TourModel.find();
   return result;
};

const getSingleTour = async (id: string): Promise<ITour | null> => {
   const result = await TourModel.findById(id);
   return result;
};

const updateTour = async (
   id: string,
   tourData: ITour,
): Promise<ITour | null> => {
   const result = await TourModel.findByIdAndUpdate(id, tourData, {
      new: true,
      runValidators: true,
   });
   return result;
};

const deleteTour = async (id: string): Promise<ITour | null> => {
   const result = await TourModel.findByIdAndDelete(id);
   return result;
};

export const TourService = {
   createTour,
   getAllTours,
   getSingleTour,
   updateTour,
   deleteTour,
};
