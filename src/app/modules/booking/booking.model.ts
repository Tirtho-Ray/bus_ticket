import mongoose, { Schema, model, Document } from "mongoose";
import { TBooking } from "./booking.interface";



const bookingSchema = new Schema<TBooking>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    busId: { type: Schema.Types.ObjectId, ref: "Bus", required: true },
    seatsBooked: { type: [Number], required: true },
    journeyDate: { type: Date, required: true },
    totalFare: { type: Number, required: true },
    paymentId: { type: Schema.Types.ObjectId, ref: "Payment", required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Booking = model<TBooking>("Booking", bookingSchema);
