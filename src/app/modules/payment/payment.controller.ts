
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { PaymentServices } from "./payment.services";


export const PaymentControllers = {
  createStripePaymentIntent: catchAsync(async (req, res) => {
    const userId = req.user?.id;
    const { bookingId } = req.body;

    const result = await PaymentServices.createStripePaymentIntent(bookingId, userId);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Stripe payment intent created",
      data: result,
    });
  }),

  confirmStripePayment: catchAsync(async (req, res) => {
    const { intentId } = req.body;

    const result = await PaymentServices.confirmStripePayment(intentId);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Stripe payment confirmed successfully",
      data: result,
    });
  }),
};
