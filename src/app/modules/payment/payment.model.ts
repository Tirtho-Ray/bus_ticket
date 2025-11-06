import { model, Schema, Types } from "mongoose";
import { TPayment } from "./payment.interface";

const paymentSchema = new Schema<TPayment>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    bookingId: { type: Schema.Types.ObjectId, ref: "Booking", required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ["Mobile_Banking", "Bank", "stripe"], required: true },
    transactionId: { type: String, required: true, unique: true },
    paymentStatus: { type: String, enum: ["success", "pending", "canceled"], required: true },
    paymentDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Payment = model<TPayment>("Payment", paymentSchema);