import express from 'express';
import { BusServices } from './bus.services';

const router = express.Router();

router.post('/', BusServices.createBusIntoDB);           
router.get('/', BusServices.getAllBusFromDB);      
router.get('/:id', BusServices.getSingleBusFromDB);      
router.patch('/:id',BusServices.updateBusIntoDB);  
router.delete('/:id', BusServices.deleteBusFromDB);    

export const BusRoutes = router;
