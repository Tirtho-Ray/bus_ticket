import express from 'express';
import { BookingController } from './booking.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/', auth(), BookingController.createBooking);
router.get('/', auth(), BookingController.getAllBookings);
router.get('/me', auth(), BookingController.getUserBookings);
router.get('/:id', auth(), BookingController.getBookingById);
router.patch('/:id', auth(), BookingController.updateBooking);
router.patch('/:id/cancel', auth(), BookingController.cancelBooking);
router.delete('/:id', auth(), BookingController.deleteBooking);

export const BookingRoutes = router;
