import  { Schema, model, Types } from "mongoose";
import { TBus } from "./bus.interface";


const busSchema = new Schema<TBus>(
  {
    busName: {
      type: String,
      required: true,
      trim: true,
    },
    route: {
      type: Schema.Types.ObjectId,
      ref: "Route",
      required: true,
    },
    busNumber: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    totalSeats: {
      type: Number,
      required: true,
      min: 1,
    },
    availableSeats: {
      type: Number,
      required: true,
      min: 0,
    },
    fare: {
      type: Number,
      required: true,
      min: 0,
    },
    departureTime: {
      type: String, 
      required: true,
    },
    arrivalTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Bus = model<TBus>("Bus", busSchema);
