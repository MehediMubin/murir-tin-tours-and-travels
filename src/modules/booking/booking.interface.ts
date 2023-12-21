import { Types } from "mongoose";

interface IBooking {
   user: Types.ObjectId;
   tour: Types.ObjectId;
}

export { IBooking };
