import { IReview } from "./review.interface";
import { ReviewModel } from "./review.model";

const createReview = async (reviewData: IReview): Promise<IReview> => {
   const result = await ReviewModel.create(reviewData);
   return result;
};

const getAllReviews = async (): Promise<IReview[]> => {
   const result = await ReviewModel.find();
   return result;
};

const getSingleReview = async (id: string): Promise<IReview | null> => {
   const result = await ReviewModel.findById(id);
   return result;
};

const updateReview = async (
   id: string,
   reviewData: IReview,
): Promise<IReview | null> => {
   const result = await ReviewModel.findByIdAndUpdate(id, reviewData, {
      new: true,
      runValidators: true,
   });
   return result;
};

const deleteReview = async (id: string): Promise<IReview | null> => {
   const result = await ReviewModel.findByIdAndDelete(id);
   return result;
};

export const ReviewService = {
   createReview,
   getAllReviews,
   getSingleReview,
   updateReview,
   deleteReview,
};
