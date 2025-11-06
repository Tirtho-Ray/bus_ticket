import Stripe from "stripe";
import { Payment } from "./payment.model";
import { Booking } from "../booking/booking.model";
import httpStatus from "http-status";
import AppError from "../../errors/appError";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-10-29.clover",
});

export const PaymentServices = {
  async createStripePaymentIntent(bookingId: string, userId: string) {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      throw new AppError(httpStatus.NOT_FOUND, "Booking not found");
    }

    if (booking.status !== "pending") {
      throw new AppError(httpStatus.BAD_REQUEST, "Booking already paid or canceled");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: booking.totalFare * 100, // Stripe uses cents
      currency: "usd",
      metadata: { bookingId, userId },
    });

    // Create payment record in DB (status: pending)
    const payment = await Payment.create({
      userId,
      bookingId,
      amount: booking.totalFare,
      method: "stripe",
      transactionId: paymentIntent.id,
      paymentStatus: "pending",
      paymentDate: new Date(),
    });

    return {
      clientSecret: paymentIntent.client_secret,
      payment,
    };
  },

  async confirmStripePayment(intentId: string) {
    const paymentIntent = await stripe.paymentIntents.retrieve(intentId);

    if (paymentIntent.status === "succeeded") {
      const payment = await Payment.findOneAndUpdate(
        { transactionId: intentId },
        { paymentStatus: "success" },
        { new: true }
      );

      if (payment) {
        await Booking.findByIdAndUpdate(payment.bookingId, {
          paymentId: payment._id,
          status: "confirmed",
        });
      }

      return { success: true, message: "Payment confirmed" };
    }

    throw new AppError(httpStatus.BAD_REQUEST, "Payment not successful");
  },
};
