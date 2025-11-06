import express from 'express';
import { PaymentControllers } from './payment.controller';

const router = express.Router();

router.post('/', PaymentControllers.createStripePaymentIntent);           
router.post('/', PaymentControllers.confirmStripePayment);           

export const BusRoutes = router;
