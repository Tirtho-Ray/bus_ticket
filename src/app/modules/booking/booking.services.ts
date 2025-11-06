import AppError from '../../errors/appError';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';
import { Types } from 'mongoose';
import httpStatus from 'http-status'
import { Bus } from '../bus/bus.model';

const createBookingIntoDB = async (payload: TBooking) => {
  const bus = await Bus.findById(payload.busId);
  if (!bus) {
    throw new AppError(httpStatus.NOT_FOUND, "Bus not found");
  }


  const seatsRequested = payload.seatsBooked.length;
  if (bus.availableSeats < seatsRequested) {
    throw new AppError(httpStatus.CONFLICT, "Not enough seats available");
  }

  const existingBookings = await Booking.find({
    busId: payload.busId,
    journeyDate: payload.journeyDate,
    seatsBooked: { $in: payload.seatsBooked },
    status: { $ne: "canceled" },
  });

  if (existingBookings.length > 0) {
    throw new AppError(
      httpStatus.CONFLICT,
      "Some selected seats are already booked"
    );
  }


  const totalFare = bus.fare * seatsRequested;


  const booking = await Booking.create({
    ...payload,
    totalFare,
    status: "pending",
  });

  bus.availableSeats -= seatsRequested;
  await bus.save();

  return booking;
};

const getAllBookingsFromDB = async () => {
 const bus= await Booking.find()
 .populate('userId')
 .populate('busId')
 .populate('paymentId');
 return bus;
};

const getBookingByIdFromDB = async (id: string) => {
  const bus =await Booking.findById(id)
  .populate('userId')
  .populate('busId')
  .populate('paymentId');
  return bus;
};

const getBookingsByUserFromDB = async (userId: Types.ObjectId) => {
  const bus= await Booking.find({ userId })
  .populate('busId')
  .populate('paymentId');
  return bus;
};

const updateBookingInDB = async (id: string, payload: Partial<TBooking>) => {
 const bus= await Booking.findByIdAndUpdate(id, payload, { new: true });
 return bus;
};

const cancelBookingInDB = async (id: string) => {
 const bus= await Booking.findByIdAndUpdate(
    id,
    { status: 'canceled' },
    { new: true }
  );
  return bus;
};

const deleteBookingFromDB = async (id: string) => {
  const bus = await Booking.findByIdAndDelete(id);
  return bus;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getBookingByIdFromDB,
  getBookingsByUserFromDB,
  updateBookingInDB,
  cancelBookingInDB,
  deleteBookingFromDB,
};
