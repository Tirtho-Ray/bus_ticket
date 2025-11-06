import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../errors/appError';
import { BookingServices } from './booking.services';

const createBooking = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'User not authenticated');
  }
  const bookingData = {
    ...req.body,
    userId,
  };

  const result = await BookingServices.createBookingIntoDB(bookingData);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Booking created successfully',
    data: result,
  });
});
;

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB();
  
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'All bookings fetched successfully',
    data: result,
  });
});

const getBookingById = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const result = await BookingServices.getBookingByIdFromDB(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Booking not found');
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking fetched successfully',
    data: result,
  });
});

const getUserBookings = catchAsync(async (req, res) => {
  const userId = req.user?.id;
  const result = await BookingServices.getBookingsByUserFromDB(userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User bookings fetched successfully',
    data: result,
  });
});

const updateBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const result = await BookingServices.updateBookingInDB(id, updatedData);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Booking not found');

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking updated successfully',
    data: result,
  });
});

const cancelBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const result = await BookingServices.cancelBookingInDB(id);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Booking not found');

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking canceled successfully',
    data: result,
  });
});

const deleteBooking = catchAsync(async (req, res) => {
 const { id } = req.params;
if (!id) throw new AppError(httpStatus.NOT_FOUND,"id not found")
  const result = await BookingServices.deleteBookingFromDB(id);

  if (!result) throw new AppError(httpStatus.NOT_FOUND, 'Booking not found');

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking deleted successfully',
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getAllBookings,
  getBookingById,
  getUserBookings,
  updateBooking,
  cancelBooking,
  deleteBooking,
};
