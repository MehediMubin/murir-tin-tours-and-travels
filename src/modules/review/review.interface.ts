import { Types } from "mongoose";

interface IReview {
   review: string;
   rating: number;
   createdAt: Date;
   tour: Types.ObjectId;
   user: Types.ObjectId;
}

export { IReview };
